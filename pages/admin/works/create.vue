<template lang="pug">
  v-layout(column)
    v-card
      the-form-work(
        :item="item"
        :definedCategory="definedCategory"
      )
</template>
<script>
import { items as firebaseDefinedCategoryItem } from '~/api/firebase/definedCategory'
import TheFormWork from '~/components/TheFormWork'
export default {
  transition: 'admin',
  layout: 'admin',
  components: {
    TheFormWork
  },
  async asyncData ({ params, error }) {
    const definedCategory = await firebaseDefinedCategoryItem()
    return {
      definedCategory: definedCategory
    }
  },
  data () {
    return {
      item: {}
    }
  }
}
</script>