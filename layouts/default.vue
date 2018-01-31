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
  background : $bg-body-primary;
  animation: appBg 20s $ease-in-out infinite;
}
@keyframes appBg {
  0% {
    background :$bg-body;
  }
  50% {
    background :darken($bg-body-secondary , 5%);
  }
  100% {
    background : $bg-body;
  }
}
</style>