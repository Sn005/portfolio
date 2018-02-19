<template lang="pug">
  v-layout(column)
    v-card
      form-work(
        :item="item"
        :definedCategory="definedCategory"
      )
</template>
<script>
import { items as firebaseDefinedCategoryItem } from '~/api/firebase/definedCategory'
import FormWork from '~/components/admin/FormWork'
export default {
  transition: 'admin',
  layout: 'admin',
  components: {
    FormWork
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