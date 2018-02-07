<template lang="pug">
  v-app(
    id="app"
    :class="this.$route.name"
  )
    nuxt
    the-page-border
    the-page-drawer
    the-page-texture
</template>
<script>
import ThePageTexture from '~/components/ThePageTexture'
import ThePageBorder from '~/components/ThePageBorder'
import ThePageDrawer from '~/components/ThePageDrawer'
export default {
  components: {
    ThePageTexture,
    ThePageBorder,
    ThePageDrawer
  }
}
</script>
<style lang="scss">
@import "../assets/style/scss/_all";
#app{
  @extend %m-app-body;
  background : $bg-body;
  animation: appBg 20s $easeInOut infinite;
  &.index{
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