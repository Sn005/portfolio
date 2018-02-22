<template lang="pug">
nuxt-link.card-work(
  :to= "linkUrl"
  :style="styleObject"
)
  p.card-work__content {{ item.name }}
</template>
<script>
  export default{
    props: {
      item: Object
    },
    data () {
      const thumbnail = !this.item.thumbnails.length ? '' : this.item.thumbnails[0].url
      return {
        linkUrl: 'works/' + this.item.id,
        styleObject: {
          backgroundImage: 'url(' + thumbnail + ')'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.card-work{
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 62%;
  background-size: cover;
  box-shadow: $card-shadow;
  transition: all .5s $easeOutQuad;
  &:hover{
    box-shadow: $card-shadow-hover;
  }
  &__content{
    display: flex;
    align-items:center;
    justify-content: center;
    overflow-x: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    background: rgba($true-black, 0.4);
    text-overflow: ellipsis;
    white-space: nowrap;
    color: $primary-white;
    font-size: 2rem;
    transition: all .5s $easeOutQuad;
    opacity: 0;
    @include text-title();
    @include mq-tabl-pc{
      font-size: 1.6rem;
    }
    &:hover{
      opacity: 1;
    }
  }
}


</style>