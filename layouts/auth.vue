<template lang="pug">
  v-app.app-body(dark)
    v-content
      v-container
        v-layout(
          justify-center
        )
          v-flex(
            md8
            xs12
          )
            nuxt
</template>

<style lang="scss">
@import "../assets/style/scss/_all";
.app-body{
  font-family: $base-font;
}
</style>