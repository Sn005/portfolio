<template lang="pug">
  div
    the-page-title-work(:item="item")
    v-content
      v-container
        card-article
          v-flex.mb-5(
            md6
            xs10
            offset-xs1
            offset-md3
          )
            carousel(
              :perPage="1"
              :perPageCustom="[[1600, 1]]"
            )
              slide(
                v-for="(image, i) in item.images"
                :key="i"
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
              p {{ item.content }}
              p 担当領域:{{ item.role }}
              p 使用スキル,ツール:{{ item.skill }}
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import ThePageTitleWork from '~/components/ThePageTitleWork'
import CardArticle from '~/components/CardArticle'
import CardArticleContent from '~/components/CardArticleContent'
import * as firebaseWorks from '~/api/firebase/works'
export default {
  components: {
    Carousel,
    Slide,
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
    // const fetchItemByOrder = async order => {
    //   const item = await firebaseWorks.fetchItemByOrder(order)
    //   if (!item) return {}
    //   return item
    // }
    const [prevItem] = await firebaseWorks.fetchItemByOrder(item.order - 1)
    const [nextItem] = await firebaseWorks.fetchItemByOrder(item.order + 1)
    return {
      item: item,
      prevItem: prevItem,
      nextItem: nextItem
    }
  }
}
</script>
