<template lang="pug">
  header.page-title-work(:style="styleObject")
    h1.page-title-work__text {{ item.name }}
    div.page-title-work__arrow--left
    div.page-title-work__arrow--right
</template>
<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      status: 'before',
      styleObject: {
        backgroundImage: 'url(' + this.item.thumbnails[0].url + ')'
      }
    }
  },
  mounted () {
    this.status = 'entry'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
.page-title-work{
  $bg: $bg-body;
  $headerH: 200px;
  $arrowSize: 80px;
  $textH: $headerH - $arrowSize;
  $deg: 44deg;
  $arrowSpacer: -3%;

  position: relative;
  width: 100%;
  height: $headerH;
  background: $bg;
  margin-bottom: 88px;
  &__arrow--left,
  &__arrow--right{
    position: absolute;
    bottom: 0;
    width: calc(50% - #{$arrowSize});
    height: $arrowSize;
    background: $bg;
    z-index: 3;
    &:after{
      content: '';
      position: absolute;
      top: 0;
      border: $arrowSize / 2 solid transparent;
    }
  }
  &__arrow--left{
    left: 0;
    &:after{
      right: - $arrowSize;
      border-left-color: $bg;
      border-bottom-color: $bg;
    }
  }
  &__arrow--right{
    right: 0;
    &:after{
      left: - $arrowSize;
      border-right-color: $bg;
      border-bottom-color: $bg;
    }
  }

  &__text{
    background-size: cover;
    line-height: $textH;
    text-align: center;
    color: $true-white;
    z-index: index($z, lower-title);
    opacity: 0;
    animation: pageTitleText 1s 1s $easeOutQuad forwards;
    @include text-title();
    // &:before{
    //   $size: 200px;
    //   content: '';
    //   position: absolute;
    //   bottom: -31px;
    //   left: 50%;
    //   margin-left: -($size / 2);
    //   width: $size;
    //   height: $size;
    //   background: $bg;
    //   transform: rotate(45deg);
    //   z-index: 1;
    // }
  }
}
@keyframes pageTitleText {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>