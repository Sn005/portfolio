<template lang="pug">
  div.page-index
    app-logo
</template>
<script>
import AppLogo from '~/components/AppLogo'
export default {
  components: {
    AppLogo
  }
}
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";
$deg: 30deg !default;


.page-index{
  position: relative;
  &:before,
  &:after{
    content: '';
    position: fixed;
    height: 100vh;
    width: 100%;
    bottom: -93vh;
    background: darken($primary-white, 10%);
    box-shadow: 0 4px 10px rgba($true-black, 0.3) inset;
  }
  &:before{
    left: 0;
    transform: skew($deg) rotate($deg);
  }
  &:after{
    right: 0;
    transform: skew(- $deg) rotate(- $deg);
  }
}
</style>
