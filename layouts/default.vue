<template lang="pug">
  v-app(
    id="app"
    :class="this.$route.name"
  ) 
    v-content
      v-container
        nuxt
    the-page-border
    the-page-texture
</template>
<script>
import ThePageTexture from '~/components/ThePageTexture'
import ThePageBorder from '~/components/ThePageBorder'
export default {
  components: {
    ThePageTexture,
    ThePageBorder
  }
}
</script>
<style lang="scss">
@import "../assets/style/scss/variables/_all";
@import "../assets/style/scss/modules/_m-app-body";
#app{
  @extend %m-app-body;
  background : $bg-body;
  &.index{
    animation: appBg 20s $ease-in-out infinite;
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