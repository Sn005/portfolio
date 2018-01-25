<template lang='pug'>
  div
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
      ) 投稿する
</template>
<script>
import { send as firebaseWorksSend } from '~/api/firebase/works'
import { VueEditor } from 'vue2-editor'
export default {
  components: {VueEditor},
  props: {
    item: Object
  },
  data () {
    return {
      isSend: false,
      valid: false,
      id: this.item.id,
      name: this.item.name,
      category: Object.keys(this.item.category),
      content: this.item.content,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name must be less than 10 characters'
      ],
      definedCategory: {
        'wordpress': true,
        'SPA': true
      }
    }
  },
  methods: {
    async send () {
      this.isSend = true
      const sendItem = {
        name: this.name,
        category: this.category,
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