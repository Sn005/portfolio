<template lang="pug">
  div.page-border
    div.page-border__inner
</template>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

$duration: 1s;
$delay: 0.5s;
$borderValue: solid 1px rgba($primary-white, 0.25);
.page-border{
  position: absolute;
  top: 2%;
  left: 2%;
  width: 96%;
  height: 96%;
  overflow: hidden;
  &:before,
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: index($z, the-page-border);
    pointer-events: none;
  }
  &:before{
    left: 1px;
    content: '';
    height: 100%;
    border-top: $borderValue;
    border-bottom: $borderValue;
    animation: width $duration $delay $easeOutQuad forwards;
  }
  &:after{
    top: 1px;
    width: 100%;
    border-left: $borderValue;
    border-right: $borderValue;
    animation: height $duration $delay $easeOutQuad forwards;
  }
}
@keyframes width {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes height {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
</style>