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
import FormContact from '~/components/FormContact'
// import * as firebaseAbout from '~/api/firebase/about'
export default {
  components: {
    ThePageTitleLower,
    CardArticle,
    FormContact
  }
}
</script>
