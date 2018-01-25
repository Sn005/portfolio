<template lang="pug">
  v-layout(column)
    v-card
      v-toolbar
        v-toolbar-title {{ name }}
      the-form-work(
        :item="item"
        :definedCategory="definedCategory"
      )
</template>
<script>
import { item as firebaseWorksItem } from '~/api/firebase/works'
import { items as firebaseDefinedCategoryItem } from '~/api/firebase/definedCategory'
import TheFormWork from '~/components/TheFormWork'
export default {
  layout: 'admin',
  async asyncData ({ params, error }) {
    const item = await firebaseWorksItem(params.id)
    const definedCategory = await firebaseDefinedCategoryItem()
    return {
      name: item.name,
      item: item,
      definedCategory: definedCategory
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