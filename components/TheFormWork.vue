<template lang='pug'>
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
      )
        v-checkbox(
          label="wordpress"
          v-model="category"
          value="wordpress"
        )
      v-flex(
        xs6
        md2
      )
        v-checkbox(
          label="hoge"
          v-model="category"
          value="hoge"
        )
    div.editor-wrapper
      vue-editor(v-model="content")
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: {VueEditor},
  props: {
    item: Object
  },
  data () {
    return {
      valid: false,
      name: this.item.name,
      category: this.item.category,
      content: this.item.content,
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name must be less than 10 characters'
      ]
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