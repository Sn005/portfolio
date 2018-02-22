<template lang="pug">
  div
    the-page-title-lower
      | WORKS
    v-content
      v-container
        ul.list-works
          li.list-works__item(
            v-for="item in items"
            :key="item.id"
          )
            card-work(:item="item")
</template>
<script>

</script>
<script>
import ThePageTitleLower from '~/components/ThePageTitleLower'
import CardWork from '~/components/CardWork'
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
    ThePageTitleLower,
    CardWork
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/scss/_all";
.list-works{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @include mq-sp{
    flex-direction: column;
  }
  &__item{
    $gutter: 16px;
    height: auto;
    margin-bottom: $gutter;
    opacity: 0;
    list-style-type: none;
    @include mq-tabl-pcl{
      width: calc(100% / 3 - #{$gutter* 2});
    }
    @include mq-tab{
      width: calc(100% / 2 - #{$gutter});
    }
    @include mq-sp{
      width: 100%;
    }
    @for $i from 1 through 20 {
      &:nth-child(#{$i}){
        $delay: 1.5 + 0.4 * $i + s;
        animation: fadeIn .5s ($delay) $easeOutQuad forwards;
      }
    }
  }
}

</style>
