<template lang="pug">
  v-layout(column)
    v-card
      v-toolbar
        v-toolbar-title {{ currentName }}
        | test
      v-form.pa-4(v-model="valid")
        v-text-field(
          label="Name"
          v-model="name"
          :rules="nameRules"
          :counter="20"
          required
        )
      vue-editor#editor(v-model="desc")
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
      desc: item.desc
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
      desc: ''
    }
  },
  components: {
    VueEditor
  }
}
</script>
<style scoped lang="scss">
  #editor {
    // .ql-snow{
    //   .ql-stroke{
    //     stroke: #ccc;
    //   }
    // }
    .ql-picker{
      color: #efefef;
    }
  }
</style>