<template lang="pug">
  div.app-loading(
    :class="{ loading: loading }"
  )
    div.app-loading__inner
      img(
        src="/images/icon-drawing.png"
        width="300px"
      )
      p Loading...
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      // this.loading = false
      setTimeout(() => {
        this.loading = false
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
  transition: all 0.5s $easeOutQuad;
  &.loading{
    opacity: 1;
    visibility: visible;
  }
  &__inner{
    font-size: 2rem;
    text-align: center;
    @include set-mid-mid();
    @include text-title();
  }
}
</style>