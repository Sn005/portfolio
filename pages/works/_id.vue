<template lang="pug">
  div
    the-page-title-work(:item="item")
</template>
<script>
import ThePageTitleWork from '~/components/ThePageTitleWork'
import * as firebaseWorks from '~/api/firebase/works'
export default {
  components: {
    ThePageTitleWork
  },
  async asyncData ({ params, error }) {
    console.log(params.id)
    const item = await firebaseWorks.item(params.id)
    if (!item) {
      this.$router.push({
        path: '/works'
      })
    }
    return {
      item: item
    }
  }
}
</script>
