<template lang="pug">
  v-layout(column)
    v-card
      form-work(
        :item="item"
        :definedCategory="definedCategory"
      )
</template>
<script>
import { item as firebaseWorksItem } from '~/api/firebase/works'
import FormWork from '~/components/admin/FormWork'
export default {
  transition: 'admin',
  layout: 'admin',
  components: {
    FormWork
  },
  async asyncData ({ params, error }) {
    const item = await firebaseWorksItem(params.id)
    if (!item) {
      this.$router.push({
        path: '/admin/works'
      })
    }
    return {
      item: item
    }
  },
  data () {
    return {
      item: {}
    }
  },
  computed: {
    isExits () {
      return true
    }
  }
}
</script>