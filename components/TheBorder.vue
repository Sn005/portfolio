<template lang="pug">
  div.the-border(
    :class="[status,this.$route.name]"
  )
</template>
<script>
export default {
  data () {
    return {
      status: 'before'
    }
  },
  mounted () {
    this.status = 'enter'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
$borderValue: solid 1px $hr-color;
  
.the-border{
  $delay: map-get($top-quee, the-border);
  $duration: $delay * 3;
  $easing: $easeOutQuad;
  $root: &;

  position: absolute;
  top: 8px;
  left: 8px;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  overflow: hidden;
  pointer-events: none;
  &:before,
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: index($z, the-border);
    pointer-events: none;
  }
  &:before{
    border-top: $borderValue;
    border-right: $borderValue;
  }
  &:after{
    border-bottom: $borderValue;
    border-left: $borderValue;
  }
  &.index{
    &:before,
    &:after{
      border: none;
    }
    &:before{
      animation: borderTopRight $duration $delay $easeOutQuad forwards;
    }
    &:after{
      animation: borderBottomLeft $duration $delay $easeOutQuad forwards;
    }
    // &:before,
    // &:after{
    //   // width: 0;
    //   // height: 0;
    //   // border: none;
    // }

    // &.enter{
    //   &:before,
    //   &:after{
    //     width: 100%;
    //     height: 100%;
    //   }
    //   &:before{
    //     border-top: $borderValue;
    //     border-right: $borderValue;
    //     transition: width $duration $easing, height $duration $delay $easing;
    //   }
    //   &:after{
    //     border-bottom: $borderValue;
    //     border-left: $borderValue;
    //     transition: height $duration $easing, width $duration $delay $easing;
    //   }
    // }
  }
}
@keyframes borderTopRight {
  0% {
    width: 0;
    height: 0;
    border: transparent;
  }
  50% {
    width: 100%;
    height: 0;
  }
  100% {
    height: 100%;
    border: $borderValue;
  }
}
@keyframes borderBottomLeft {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    height: 100%;
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>