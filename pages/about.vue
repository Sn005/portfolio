<template lang="pug">
  div
    the-page-title-lower
      | ABOUT
    v-content
      v-container
        card-article
          card-article-content
            p {{ item.content }}
</template>
<script>

</script>
<script>
import ThePageTitleLower from '~/components/ThePageTitleLower'
import CardArticle from '~/components/CardArticle'
import CardArticleContent from '~/components/CardArticleContent'
import * as firebaseAbout from '~/api/firebase/about'
export default {
  components: {
    ThePageTitleLower,
    CardArticle,
    CardArticleContent
  },
  async asyncData () {
    return {
      item: await firebaseAbout.item()
    }
  }
}
</script>
