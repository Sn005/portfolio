<template lang="pug">
  div
    the-page-title-lower
     | WORKS
</template>
<script>

</script>
<script>
import ThePageTitleLower from '~/components/ThePageTitleLower'
import * as firebaseWorks from '~/api/firebase/works'
export default {
  async asyncData () {
    const items = await firebaseWorks.items()
    return {
      items: items.sort((a, b) => {
        if (a.order < b.order) return -1
        if (a.order > b.order) return 1
        return 0
      })
    }
  },
  components: {
    ThePageTitleLower
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";

</style>
