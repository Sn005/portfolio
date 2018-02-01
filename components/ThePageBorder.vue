<template lang="pug">
  div.page-border
    div.page-border__inner
</template>
<style scoped lang="scss">
@import "../assets/style/scss/variables/_all";

$duration: 500ms;
$borderValue: solid 1px rgba($primary-white, 0.25);
.page-border{
  position: absolute;
  top: 2%;
  left: 2%;
  width: 96%;
  height: 96%;
  &:before,
  &:after{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    content: '';
  }
  &:before{
    height: 100%;
    border-top: $borderValue;
    border-bottom: $borderValue;
    animation: width $duration $easeOutQuad forwards;
  }
  &:after{
    width: 100%;
    border-left: $borderValue;
    border-right: $borderValue;
    animation: height $duration $easeInQuad forwards;
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