<template lang="pug">
  div
    ul.navitation-work
      li.navitation-work__item
        nuxt-link.navitation-work__prev(
          v-if="prev.id"
          :to= "prev.id + '?direction=prev'"
        ) {{ prev.name }}
      li.navitation-work__item
        nuxt-link.navitation-work__next(
          v-if="next.id"
          :to= "next.id + '?direction=next'"
        ) {{ next.name }}
</template>
<script>
  export default{
    props: {
      prev: Object,
      next: Object
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.navitation-work{
  $color: $darken-gray;
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  @include mq-sp{
    flex-wrap: wrap-reverse;
  }
  &__item{
    width: calc( 50% - 32px);
    list-style-type: none;
    @include mq-sp{
      width: 80%;
      margin:0 auto;
      text-align: center;
    }
    & + & {
      @include mq-sp{
        margin: 0 auto 24px;
      }
    }
  }
  &__prev,
  &__next{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid $color;
    opacity: 1;
    color: $color;
    text-decoration: none;
    transition: all .5s $easeOutQuad;
    &:hover{
      opacity: 0.5;
    }
    &:before{
      position: absolute;
      bottom: 10px;
      content: '';
      width: 32px;
      height: 1px;
      background: $color;
      transform: rotate(45deg);
    }
  }
  &__prev{
    padding-left: 1em;
    &:hover{
      transform: translateX(-16px);
    }
    &:before{
      bottom: -12px;
      left: -4px;
    }
  }
  &__next{
    padding-right: 1em;
    &:hover{
      transform: translateX(16px);
    }
    &:before{
      bottom: 10px;
      right: -4px;
    }
  }
}

</style>