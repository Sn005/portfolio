<template lang="pug">
  header.page-title-lower
    h1.page-title-lower__text WORKS
</template>
<script>
export default {
  data () {
    return {
      status: 'before'
    }
  },
  mounted () {
    this.status = 'entry'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
.page-title-lower{
  $deg: 30deg;
  // $bg: darken($primary-white, 80%);
  $bg: darken($primary-color, 30%);
  $height: 120px;

  position: relative;
  width: 100%;
  height: $height;
  background: $bg;
  &:before{
    $size: 200px;
    content: '';
    position: absolute;
    bottom: - ($size / 4) ;
    left: 50%;
    margin-left: -($size / 2);
    width: $size;
    height: $size;
    background: $bg;
    transform: rotate(45deg);
    z-index: 1;
  }
  &__text{
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    line-height: $height;
    text-align: center;
    color: $true-white;
    z-index: index($z, lower-title);
    opacity: 0;
    animation: pageTitleText 1s 1s $easeOutQuad forwards;
    @include text-title();
    @include mq-tabl-pcl{
      font-size: 2rem;
      width: 40%;
    }
    @include mq-tab-sp{
      width: 90%;
      padding-top: 16px;
      font-size: 1.8rem;
    }
    &:before,
    &:after{
      flex: 50%;
      content: '';
      height: 6px;
      border-top: solid 1px $hr-color;
      border-bottom: solid 1px $hr-color;
      z-index: index($z, index-title-border);
      @include mq-tabl-pcl{
        margin:0 16px;
      }
      @include mq-tab-sp{
        margin:0 4px;
      }
    }
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