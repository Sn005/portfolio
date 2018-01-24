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
              v-model="cat"
              value="wordpress"
            )
          v-flex(
            xs6
            md2
          )
            v-checkbox(
              label="hoge"
              v-model="cat"
              value="hoge"
            )
      div.editor-wrapper.ma-4
        vue-editor(v-model="desc")
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
      desc: item.desc,
      cat: Object.keys(item.cat)
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
      cat: [],
      desc: ''
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