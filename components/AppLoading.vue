<template lang="pug">
  div.app-loading(
    v-if="loading"
  )
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
      setTimeout(() => {
        this.loading = false
      }, 1000)
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
  text-align: center;
  padding-top: 200px;
  font-family: 'Josefin Slab', serif;
  font-weight:100;
  font-size: 2rem;
  letter-spacing: 0.1em;
  z-index:index( $z, app-loading);
}

</style>