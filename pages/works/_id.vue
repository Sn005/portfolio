<template lang="pug">
  div
    the-page-title-work(:item="item")
    v-content
      v-container
        card-article
          card-article-content
            | test
</template>
<script>
import ThePageTitleWork from '~/components/ThePageTitleWork'
import CardArticle from '~/components/CardArticle'
import CardArticleContent from '~/components/CardArticleContent'
import * as firebaseWorks from '~/api/firebase/works'
export default {
  components: {
    ThePageTitleWork,
    CardArticle,
    CardArticleContent
  },
  async asyncData ({ params, error }) {
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
