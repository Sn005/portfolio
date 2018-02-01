<template lang="pug">
  div.app-logo
    h1.app-logo__title.animated.fadeIn
      span.app-logo__text.is-sp
        | narihara
        br
        | portfolio
      span.app-logo__text.is-pc
        //- | narihara portfolio
    the-app-logo-icon
</template>
<style scoped lang="scss">
// @import "../assets/style/scss/variables/_init-animate";
@import "../assets/style/scss/_all";
.app-logo{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: calc(96vh - 16px);
  &__title{
    display: flex;
    align-items: center;
    position: relative;
    width: 95%;
    text-align: center;
    &:before,
    &:after{
      flex: 50%;
      content: '';
      height: 6px;
      border-top: solid 1px rgba($primary-white, 0.25);
      border-bottom: solid 1px rgba($primary-white, 0.25);
      z-index: index($z, index-title-border);
    }
  }
  &__text{
    position: relative;
    padding: 0 8px;
    z-index: index($z, index-title);
    font-family: 'Josefin Slab', serif;
    font-weight:100;
    letter-spacing: 0.1em;
    font-size: 2rem;
    color: $true-white;
      &.is-pc{
        @include mq-tabl-pcl{
          width: 18em;
        }
        @include mq-tab-sp{
          display: none;
        }
      }
      &.is-sp{
        @include mq-tabl-pcl{
          display: none;
        }
        @include mq-tab-sp{
          width: 9em;
        }
      }
  }
}
</style>