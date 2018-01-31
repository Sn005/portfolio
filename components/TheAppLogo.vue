<template lang="pug">
  div.app-logo
    section.app-logo__content
      h1.app-logo__title portfolio
      //- img(src="/images/icon-app.png" width="180px")
</template>
<style lang="scss">
@import "../assets/style/scss/_all";

.app-logo{
  position: relative;
  width: 100vw;
  height: 100vh;
  &__title{
    font-family: 'Josefin Slab', serif;
    font-weight:100;
    // font-family: 'Julius Sans One', sans-serif;
    // font-family: 'Poiret One', cursive;

    letter-spacing: 0.1em;
    font-size: 2rem;
    color: $true-white;
  }
  &__content{
    text-align: center;
    @include set-mid-mid();
  }
}
</style>