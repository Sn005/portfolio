<template lang="pug">
  div
    the-page-title-lower
      | CONTACT
    v-content
      v-container
        card-article
          card-article-content
            form-contact
</template>
<script>

</script>
<script>
import ThePageTitleLower from '~/components/ThePageTitleLower'
import CardArticle from '~/components/CardArticle'
import CardArticleContent from '~/components/CardArticleContent'
import FormContact from '~/components/FormContact'
export default {
  components: {
    ThePageTitleLower,
    CardArticle,
    CardArticleContent,
    FormContact
  }
}
</script>
