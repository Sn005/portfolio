<template lang="pug">
  div.the-border(
    :class="[this.$route.name]"
  )
</template>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
$borderValue: solid 1px $hr-color;
  
.the-border{
  $duration: map-get($top-quee, the-border);
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
      animation: borderTopRight $duration $easeOutQuad forwards;
    }
    &:after{
      animation: borderBottomLeft $duration $easeOutQuad forwards;
    }
  }
}
@keyframes borderTopRight {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    width: 100%;
    height: 0;
  }
  100% {
    height: 100%;
    border-top: $borderValue;
    border-right: $borderValue;
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
    border-bottom: $borderValue;
    border-left: $borderValue;
  }
}
</style>