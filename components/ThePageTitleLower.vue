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
  width: 100%;
  height: 160px;
  background: darken($primary-color, 10%);
  &:before{
    $size: 200px;
    content: '';
    position: absolute;
    bottom: - ($size / 2) ;
    left: 50%;
    margin-left: -($size / 2);
    width: $size;
    height: $size;
    background: darken($primary-color, 10%);
    transform: rotate(45deg);
    z-index: 1;
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