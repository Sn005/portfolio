<template lang="pug">
  div.app-logo
    h1.app-logo__title
      span.app-logo__text narihara portfolio
    the-app-logo-icon
</template>
<script>
import TheAppLogoIcon from '~/components/TheAppLogoIcon'
export default {
  components: {
    TheAppLogoIcon
  }
}
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.app-logo{
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(96vh - 16px);
  &__title{
    position: relative;
    width: 100%;
    text-align: center;
    &:before{
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 6px;
      border-top: solid 1px rgba($primary-white, 0.25);
      border-bottom: solid 1px rgba($primary-white, 0.25);
      z-index: index($z, index-title-border);
    }
  }
  &__text{
    position: relative;
    display: inline-block;
    padding: 0 8px;
    background : $bg-body;
    z-index: index($z, index-title);

    font-family: 'Josefin Slab', serif;
    font-weight:100;
    letter-spacing: 0.1em;
    font-size: 2rem;
    color: $true-white;
    animation: indexTitleBg 20s $ease-in-out infinite;
  }
}
@keyframes indexTitleBg {
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