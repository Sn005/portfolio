<template lang="pug">
  div.page-title-lower
    p.page-title-lower__text dd
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

  position: relative;
  perspective: 2000px;
  // width: 100vw;
  // height: 100vw;
  // background: darken($primary-white, 10%);
  // transform: rotate(45deg);
  &:before{
    content: '';
    position: absolute;
    top: -100vw;
    width: 100vw;
    height: 100vw;
    background: darken($primary-white, 10%);
    transform: rotate(45deg) translate3d(0, 150px, 100px);
    // transform: translate3d(0, 150px, 100px);
    // transform: skew(10deg) rotate(45deg);
  }
  // &:before,
  // &:after{
  //   content: '';
  //   position: absolute;
  //   width: 100vw;
  //   height: 100vh;
  //   box-shadow: 0 4px 10px rgba($true-black, 0.3) inset;
  // }
  // &:before{
  //   left: 0;
  //   transform: skew($deg) rotate($deg);
  // }
  // &:after{
  //   right: 0;
  //   transform: skew(- $deg) rotate(- $deg);
  // }
}
</style>