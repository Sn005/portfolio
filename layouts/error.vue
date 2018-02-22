<template lang="pug">
  div
    the-page-title-lower
      span(v-if="error.statusCode === 404") 404
      span(v-else) ERROR
    v-content
      v-container
        card-article
          card-article-content
            v-flex(
              text-xs-center
            )
              p {{ message }}
              v-btn(
                flat
                large
                to="/"
              ) HOME
</template>
<script>

</script>
<script>
import ThePageTitleLower from '~/components/ThePageTitleLower'
import CardArticle from '~/components/CardArticle'
import CardArticleContent from '~/components/CardArticleContent'
export default {
  components: {
    ThePageTitleLower,
    CardArticle,
    CardArticleContent
  },
  props: ['error'],
  layout: 'default',
  computed: {
    message () {
      const isNotFound = 'ぺージが見つかりませんでした'
      const isError = 'エラーが発生しました'
      return this.error.statusCode === 404 ? isNotFound : isError
    }
  }
}
</script>
