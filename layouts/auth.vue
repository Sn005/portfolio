<template lang="pug">
  v-app.app-body(dark)
    v-content
      v-container
        v-layout(
          row 
          justify-center
          align-center
        )
          v-flex(
            md8
            xs12
          )
            nuxt
</template>

<style lang="scss">
@import "../assets/style/scss/modules/_m-app-body.scss";
.app-body{
  @extend %m-app-body--is-admin;
}
</style>