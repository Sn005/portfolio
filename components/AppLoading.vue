<template lang="pug">
  div.app-loading(
    :class="status"
  )
    div.app-loading__inner
      img(
        src="/images/icon-drawing.png"
        width="300px"
      )
      p
        span.app-loading__text(
          v-for="(text , i) in texts"
          :class="status"
          :key="i"
        ) {{ text }}
</template>

<script>
export default {
  data: () => ({
    status: 'before',
    texts: 'Loading...'
  }),
  methods: {
    start () {
      this.status = 'enter'
    },
    finish () {
      setTimeout(() => {
        this.status = 'end'
      }, 1000)
      setTimeout(() => {
        this.status = 'before'
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";

.app-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: darken($primary-white, 10%);
  z-index:index( $z, app-loading);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(0.9);
  transition: all 1s $easeOutQuad;
  &.enter{
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
  &.end{
    animation: loadingEnd 1s $easeOutQuad forwards;
  }
  &__inner{
    font-size: 2rem;
    text-align: center;
    @include set-mid-mid();
    @include text-title();
  }
  &__text{
    &.enter{
      @for $i from 1 through 20 {
        &:nth-child(#{$i}){
          $delay: 1 + 0.4 * $i + s;
          animation: loadingText 1.5s ($delay) $easeOutQuad infinite;
        }
      }
    }
  }
}

@keyframes loadingEnd {
  0% {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
  95% {
    transform: scale(1.1);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    transform: scale(1);
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes loadingText {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
</style>