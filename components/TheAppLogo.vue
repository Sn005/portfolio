<template lang="pug">
  div.app-logo
    section.app-logo__content
      h1.app-logo__title narihara portfolio
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
  position: relative;
  width: 100%;
  height: calc(96vh - 16px);
  &__title{
    position: relative;
    display: inline-block;
    padding: 0 80px;
    font-family: 'Josefin Slab', serif;
    font-weight:100;
    letter-spacing: 0.1em;
    font-size: 2rem;
    color: $true-white;
    &:before,
    &:after{
      content: '';
      position: absolute;
      top: 50%;
      display: inline-block;
      width: 72px;
      height: 6px;
      border-top: solid 1px rgba($primary-white, 0.25);
      border-bottom: solid 1px rgba($primary-white, 0.25);
    }
    &:before{
      left:0;
    }
    &:after{
      right:0;
    }
  }
  &__content{
    text-align: center;
    @include set-mid-mid();
  }
}
</style>