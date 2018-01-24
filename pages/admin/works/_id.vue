<template lang="pug">
  v-layout(column)
    v-card
      v-toolbar
        v-toolbar-title {{ item.name }}
</template>
<script>
import { item as firebaseWorksItem } from '~/api/firebase/works'
export default {
  layout: 'admin',
  async asyncData ({ params, error }) {
    const item = await firebaseWorksItem(params.id)
    return {
      item: item
    }
  }
}
</script>