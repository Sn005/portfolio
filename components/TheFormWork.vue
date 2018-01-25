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
      ]
    }
  },
  computed: {
    isExits () {
      return !!this.id
    }
  },
  methods: {
    async send () {
      this.isSend = true
      let category = {}
      if (this.category.length > 0) {
        category = this.category.reduce(
          (object, item) => Object.assign(object, {[item]: true}),
          {}
        )
      }
      const sendItem = {
        name: this.name,
        category: category,
        content: this.content
      }
      await firebaseWorksSend(this.id, sendItem)
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
</style>