<template lang="pug">
div.btn-menu
  span.btn-menu__icon(
    :class="{ active: isActive }"
  )
</template>
<script>
  export default {
    props: {
      isActive: Boolean
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.btn-menu{
  display: block;
  width: 32px;
  height: 24px;
  opacity: 1;
  transition: all 0.3s $easeIn;
  cursor: pointer;
  &:hover{
    opacity: .7;
  }
}

$easing: $easeOutQuad !default;

%btn-menu__icon{
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 1px;
  transition: all .4s $easing;
  background: rgba($primary-white, 0.65);
}
.btn-menu__icon{
  @extend %btn-menu__icon;
  &:before,
  &:after{
    @extend %btn-menu__icon;
    content: '';
  }
  &:before{
    top: 11px;
  }
  &:after{
    top: 23px;
  }
  &.active{
    transform: translateY(11px) rotate(-45deg);
    &:before{
      opacity: 0;
      transform: translate3d(0, -11px) rotate(45deg);
    }
    &:after{
      transform: translateY(-23px) rotate(90deg);
    }
  }
}
@keyframes activeIcon2 {
  0% {
    transform: translateY(-23px) rotate(45deg);
  }
  100% {
    transform: rotate(45deg);
    height: 0;
  }
}
</style>