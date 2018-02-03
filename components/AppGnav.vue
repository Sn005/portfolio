<template lang="pug">
  nav.app-gnav
    ul
      li.app-gnav__item(
        v-for="item in items"
        :key="item"
      )
        nuxt-link.app-gnav__link(
          :to="item.to"
        ) {{ item.title }}
</template>
<script>
  export default{
    data () {
      return {
        items: [
          { title: 'Home', to: '/' },
          { title: 'Works', to: '/works' },
          { title: 'About', to: '/about' },
          { title: 'Contact', to: '/contact' }
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.app-gnav{
  &__item{
    list-style-type: none;
    text-align: center;
  }
  &__link{
    font-family: 'Josefin Slab', serif;
    font-weight:100;
    letter-spacing: 0.1em;
    color: $true-white;
    font-size: 2.4rem;
    text-decoration: none;
  }
}
</style>