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
export default {
  layout: 'admin',
  async asyncData ({ params, error }) {
    const item = await firebaseWorksItem(params.id)
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