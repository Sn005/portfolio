<template lang="pug">
  div.app-logo
    section.app-logo__content
      h1.app-logo__title narihara portfolio
      img(src="/images/icon-app.png" width="180px")
</template>
<style lang="scss">
@import "../assets/style/scss/_all";

.app-logo{
  position: relative;
  width: 100vw;
  height: 100vh;
  &__title{
    font-family: 'Cinzel Decorative', cursive;
    font-family: 'Bilbo', cursive;
    font-size: 2rem;
    color: $true-white;
  }
  &__content{
    text-align: center;
    @include set-mid-mid();
  }
}
</style>