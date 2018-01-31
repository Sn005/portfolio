<template lang="pug">
  div.page-overlay
</template>
<style scoped lang="scss">
@import "../assets/style/scss/variables/_all";
.page-overlay{
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100vw;
  height: 100vh;
  background:  url(#{$dir-img}bg-body.png);
  opacity: 0.042;
}
</style>