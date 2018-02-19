<template lang="pug">
  v-app(
    id="app"
    :class="this.$route.name"
  )
    nuxt
    the-page-border
    the-drawer
    the-texture
</template>
<script>
import TheTexture from '~/components/TheTexture'
import ThePageBorder from '~/components/ThePageBorder'
import TheDrawer from '~/components/TheDrawer'
export default {
  components: {
    TheTexture,
    ThePageBorder,
    TheDrawer
  }
}
</script>
<style lang="scss">
@import "../assets/style/scss/_all";
#app{
  @extend %m-app-body;
  background : $bg-body;
  &.index{
    animation: appBg 20s $easeInOut infinite;
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