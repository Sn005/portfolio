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
  animation: bg 10s $ease-in-out infinite;
  &:after{
    content: '';
    width: 100vw;
    height: 100vh;
    background:  url(#{$dir-img}bg-body.png);
    opacity: 0.035;
  }
}
@keyframes bg {
  0% {
    background : $bg-body;
  }
  50% {
    background :darken($darken-red , 24%);
  }
  100% {
    background : $bg-body;
  }
}
</style>