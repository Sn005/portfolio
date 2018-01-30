<template lang="pug">
  v-app(
    id="app"
  )
    div.app-body
</template>
<style lang="scss">
@import "../assets/style/scss/variables/_themes";
@import "../assets/style/scss/modules/_m-app-body";
#app{
  @extend %m-app-body;
  background : $bg-body;
}
</style>