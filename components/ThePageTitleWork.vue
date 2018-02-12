<template lang="pug">
  header.page-title-works(:style="styleObject")
    h1.page-title-works__text {{ item.name }}
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
.page-title-works{
  $bg: darken($primary-color, 30%);
  $headerH: 160px;
  $arrowH: 72px;
  $textH: $headerH - $arrowH;
  $deg: 44deg;
  $arrowSpacer: -3%;

  position: relative;
  width: 100%;
  height: $headerH;
  background: $bg;
  margin-bottom: 88px;
  &:before,
  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 50%;
    height: $arrowH;
    background: $bg-body;
    z-index: 3;
  }
  &:before{
    left: $arrowSpacer;
    transform:skewX($deg);
  }
  &:after{
    right: $arrowSpacer;
    transform:skewX(- $deg);
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