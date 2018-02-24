<template lang="pug">
  div
    the-page-title-work(:item="item")
    v-content
      v-container
        card-article
          v-flex.clearfix.mx-auto(
            lg5
            md8
            xs12
          )
            carousel(
              :perPage="1"
              :perPageCustom="[[1600, 1]]"
            )
              slide(
                v-for="image in item.images"
                :key="image.url"
              )
                img(
                  :src="image.url"
                  width="100%"
                )
          v-flex(
            md10
            xs12
            offset-md1
          )
            card-article-content
              p(v-html="formattedContent")
              p(v-if="formattedUrl") サイトURL:
                span(v-html="formattedUrl")
              p 担当領域:{{ item.assign }}
              p 使用スキル・ツール:{{ item.skill }}
          v-flex(
            lg8
            offset-lg2
            sm10
            offset-sm1
            xs12
          )
            navigation-work(
              :prev="prev"
              :next="next"
            )
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import ThePageTitleWork from '~/components/ThePageTitleWork'
import CardArticle from '~/components/CardArticle'
import CardArticleContent from '~/components/CardArticleContent'
import NavigationWork from '~/components/NavigationWork'
import * as firebaseWorks from '~/api/firebase/works'
import h from 'htmlspecialchars'
import { link } from 'autolinker'
export default {
  components: {
    Carousel,
    Slide,
    ThePageTitleWork,
    CardArticle,
    CardArticleContent,
    NavigationWork
  },
  transition (to, from) {
    const direction = to.query.direction
    if (!direction) return 'page'
    if (direction === 'next') {
      return 'slide-right'
    } else {
      return 'slide-left'
    }
  },
  async asyncData ({ params, error }) {
    const item = await firebaseWorks.item(params.id)
    if (!item) {
      error({ statusCode: 404 })
    }
    const prev = await firebaseWorks.fetchItemByOrder(item.order - 1)
    const next = await firebaseWorks.fetchItemByOrder(item.order + 1)
    return {
      item: item,
      prev: prev,
      next: next
    }
  },
  computed: {
    formattedContent () {
      return link(h(this.item.content), {stripPrefix: false})
    },
    formattedUrl () {
      if (!this.item.url) return false
      return link(h(this.item.url), {stripPrefix: false})
    }
  }
}
</script>
