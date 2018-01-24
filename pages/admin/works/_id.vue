<template lang="pug">
  v-layout(column)
    v-card
      v-toolbar
        v-toolbar-title {{ currentName }}
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
import { item as firebaseWorksItem } from '~/api/firebase/works'
import { VueEditor } from 'vue2-editor'
export default {
  layout: 'admin',
  async asyncData ({ params, error }) {
    const item = await firebaseWorksItem(params.id)
    return {
      currentName: item.name,
      name: item.name,
      content: item.content,
      category: Object.keys(item.category)
    }
  },
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 20 || 'Name must be less than 10 characters'
      ],
      category: [],
      content: ''
    }
  },
  components: {
    VueEditor
  }
}
</script>
<style scoped lang="scss">
.editor{
  &-wrapper{
    background : #1d1d1d;
  }
}
</style>