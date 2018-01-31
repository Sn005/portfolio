<template lang="pug">
  v-app(
    id="app"
  )
    div.app-body
      the-app-logo
</template>
<script>
import TheAppLogo from '~/components/TheAppLogo'
export default {
  components: {
    TheAppLogo
  }
}
</script>
<style lang="scss">
@import "../assets/style/scss/variables/_all";
@import "../assets/style/scss/modules/_m-app-body";
#app{
  @extend %m-app-body;
  background : $bg-body;
  animation: appBg 20s $ease-in-out infinite;
  &:after{
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100vw;
    height: 100vh;
    background:  url(#{$dir-img}bg-body.png);
    opacity: 0.042;
  }
}
@keyframes appBg {
  0% {
    background :$bg-body;
  }
  50% {
    background :lighten($bg-body-secondary , 1%);
  }
  100% {
    background : $bg-body;
  }
}
</style>