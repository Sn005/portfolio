<template lang="pug">
  div.page-border(:class="status")
    div.page-border__inner(:class="status")
</template>
<script>
import AppLogo from '~/components/AppLogo'
export default {
  data () {
    return {
      status: 'before'
    }
  },
  components: {
    AppLogo
  },
  mounted () {
    this.status = 'entry'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";

.page-border{
  $delay: map-get($top-quee, pageBorder);
  $duration: $delay;
  $easing: $easeOutQuad;
  $borderValue: solid 1px $hr-color;

  position: absolute;
  top: 8px;
  left: 8px;
  width: calc(100% -16px);
  height: calc(100% -16px);
  overflow: hidden;
  &:before,
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: index($z, the-page-border);
    pointer-events: none;
  }
  &.entry{
    &:before,
    &:after{
      width: 100%;
      height: 100%;
    }
    &:before{
      border-top: $borderValue;
      border-right: $borderValue;
      transition: width $duration $easing, height $duration $delay $easing;
    }
    &:after{
      border-bottom: $borderValue;
      border-left: $borderValue;
      transition: height $duration $easing, width $duration $delay $easing;
    }
  }
}

</style>