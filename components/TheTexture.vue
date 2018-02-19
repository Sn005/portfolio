<template lang="pug">
  div.the-texture
</template>
<style scoped lang="scss">
@import "../assets/style/scss/_all";
.the-texture{
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  opacity: 0.042;
  z-index: index($z, the-texture);
  pointer-events: none;
  @include mq-tabl-pcl{
    background:  url(#{$dir-img}bg-body.png);
  }
  @include mq-tab-sp{
    background:  url(#{$dir-img}bg-body@2x.png);
    background-size: 50% auto;
  }
}
</style>