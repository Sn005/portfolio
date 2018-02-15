<template lang="pug">
  v-layout(column)
    v-card
      the-form-work(
        :item="item"
        :definedCategory="definedCategory"
      )
</template>
<script>
import { item as firebaseWorksItem } from '~/api/firebase/works'
import { items as firebaseDefinedCategoryItem } from '~/api/firebase/definedCategory'
import TheFormWork from '~/components/admin/TheFormWork'
export default {
  transition: 'admin',
  layout: 'admin',
  components: {
    TheFormWork
  },
  async asyncData ({ params, error }) {
    const item = await firebaseWorksItem(params.id)
    if (!item) {
      this.$router.push({
        path: '/admin/works'
      })
    }
    const definedCategory = await firebaseDefinedCategoryItem()
    return {
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
  computed: {
    isExits () {
      return true
    }
  }
}
</script>