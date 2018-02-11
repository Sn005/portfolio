<template lang="pug">
  div
    the-page-title-lower
      | WORKS
    v-content
      v-container
        ul.list-works
          li.list-works__item(
            v-for="(item, i) in items"
            :key="i"
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
@import "../assets/style/scss/_all";
.list-works{
  &__item{
    width: calc(100% / 3 -16px);
    height: auto;
    opacity: 0;
    list-style-type: none;
      @for $i from 1 through 20 {
        &:nth-child(#{$i}){
          $delay: 1.5 + 0.4 * $i + s;
          animation: listWorks .5s ($delay) $easeOutQuad forwards;
        }
      }
  }
}
@keyframes listWorks {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    
    visibility: visible;
  }
}
</style>
