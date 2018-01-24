<template lang="pug">
  v-layout(column)
    v-card
      v-toolbar
        v-toolbar-title {{ name }}
      the-form-work(:item="item")
</template>
<script>
import { item as firebaseWorksItem } from '~/api/firebase/works'
import TheFormWork from '~/components/TheFormWork'
// import { VueEditor } from 'vue2-editor'
export default {
  layout: 'admin',
  async asyncData ({ params, error }) {
    let item = await firebaseWorksItem(params.id)
    item['category'] = Object.keys(item['category'])
    return {
      name: item.name,
      item: item
    }
  },
  data () {
    return {
      item: {
        name: '',
        category: [],
        content: ''
      }
    }
  },
  components: {
    TheFormWork
  }
}
</script>