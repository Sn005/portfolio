<template lang='pug'>
  div
    v-toolbar
      v-toolbar-title {{ name }}
    v-progress-linear.mt-0(
      v-if="isSend"
      :indeterminate="true"
    )
    v-form.pa-4(v-model="valid")
      v-text-field(
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="20"
        required
      )
      v-layout(row)
        v-flex(
          xs6
          md2
          v-for="(value, key) in definedCategory"
          :key="key"
        )
          v-checkbox(
            :label="key"
            v-model="category"
            :value="key"
          )
      v-btn
        | upload
        input.file-input(
          type="file"
          ref="image"
          name="image"
          accept="*"
          @change="onFileChange($event, 'eyecatch')"
        )
      div.editor-wrapper
        vue-editor(v-model="content")
    v-flex(offset-xs5)
      v-btn(
        color="primary"
        large
        @click="send"
        v-html="isExits ? '更新する' : '登録する'"
      )
</template>
<script>
import { send as firebaseWorksSend } from '~/api/firebase/works'
import { send as storageSend } from '~/api/firebase/partial/storage'
import { VueEditor } from 'vue2-editor'
export default {
  components: {VueEditor},
  props: {
    item: Object,
    definedCategory: Object
  },
  data () {
    return {
      title: this.item.id ? this.item.name : '新規登録',
      isSend: false,
      valid: false,
      id: this.item.id || '',
      name: this.item.name,
      category: Object.keys(this.item.category),
      content: this.item.content,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name must be less than 10 characters'
      ],
      eyecatch: []
    }
  },
  computed: {
    isExits () {
      return !!this.id
    }
  },
  methods: {
    getFormData (files) {
      const data = new FormData();
      [...files].forEach(file => {
        data.append('data', file, file.name)
      })
      return data
    },
    onFileChange (event, target) {
      const files = event.target.files || event.dataTransfer.files
      if (!event.target.files.length) return

      const accept = 'image/*'

      this[target] = [...files].map((file, index) => {
        return {
          name: file.name,
          blob: new Blob([file.result], { type: accept })
        }
      })
    },

    async send () {
      this.isSend = true
      let category = {}
      if (this.category.length > 0) {
        category = this.category.reduce(
          (object, item) => Object.assign(object, {[item]: true}),
          {}
        )
      }
      await storageSend(this.eyecatch)

      const payload = {
        name: this.name,
        category: category,
        content: this.content,
        eyecatch: this.eyecatch.name
      }
      await firebaseWorksSend(this.id, payload)
      this.isSend = false
    }
  }
}
</script>
<style scoped lang="scss">
@import "../assets/style/scss/modules/_m-editor.scss";
.editor-wrapper{
  @extend %m-editor-wrapper;
}
.file{
  &-btn{
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  &-input{
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
  }
}
</style>