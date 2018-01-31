<template lang="pug">
  div.app-logo
    section.app-logo__content
      h1.app-logo__title narihara portfolio
</template>
<style lang="scss">
@import "../assets/style/scss/_all";

.app-logo{
  position: relative;
  width: 100%;
  height: 100vh;
  &__title{
    font-family: 'Josefin Slab', serif;
    font-weight:100;
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