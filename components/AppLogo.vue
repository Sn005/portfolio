<template lang="pug">
  div.app-logo
    p(v-if="status=== 'before'") loading
    h1.app-logo__title(
      v-else
      :class="status"
    )
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
      status: 'before'
    }
  },
  mounted () {
    this.status = 'entry'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
.app-logo{
  $delay: map-get($top-quee, appLogo);
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
    opacity: 0;
    &.entry{
      animation: appLogo 0.8s $delay $easeInQuad forwards;
    }
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
    font-size: 2rem;
    color: $true-white;
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
@keyframes appLogo {
  0% {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

</style>