<template lang="pug">
  div.app-logo
    transition(
      name="app-logo__title"
    )
      h1.app-logo__title
        span.app-logo__text.is-sp
          | narihara
          br
          | portfolio
        span.app-logo__text.is-pc
          | narihara portfolio
</template>
<script>
export default {
  data () {
    return {
      enter: false
    }
  },
  mounted () {
    this.enter = true
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
.app-logo{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: calc(96vh - 16px);
  &__title{
    $delay: map-get($top-quee, appLogo);

    display: flex;
    align-items: center;
    position: relative;
    width: 95%;
    text-align: center;
    opacity: 0;
    animation: fadeInUp 1s $delay $easeOutQuad forwards;
    &:before,
    &:after{
      flex: 50%;
      content: '';
      height: 6px;
      border-top: solid 1px $hr-color;
      border-bottom: solid 1px $hr-color;
      z-index: index($z, index-title-border);
    }
  }
  &__text{
    position: relative;
    padding: 0 8px;
    z-index: index($z, index-title);
    color: $true-white;
    @include mq-tabl-pcl{
      font-size: 3.2rem;
    }
    @include mq-tab-sp{
      font-size: 2.8rem;
    }
    @include text-title();
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