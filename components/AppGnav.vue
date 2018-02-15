<template lang="pug">
  nav.app-gnav
    ul
      li.app-gnav__item(
        v-for="(item , i) in items"
        :key="i"
        :class="{ active: isDrawer }"
        @click="toggleDrawer"
      )
        nuxt-link.app-gnav__link(
          :to="item.to"
        ) {{ item.title }}
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters, mapActions } = createNamespacedHelpers('app')
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
    },
    computed: {
      ...mapGetters(['isDrawer'])
    },
    methods: {
      ...mapActions(['toggleDrawer'])
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.app-gnav{
  &__item{
    $delay: 0.1s;
    margin-bottom: 8px;
    list-style-type: none;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, 20px, 0);
    &.active{
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    @for $i from 1 through 5 {
      &:nth-child(#{$i}){
        transition: all 0.5s $delay * $i $easeOutQuad;
      }
    }
  }
  &__link{
    color: $true-white;
    font-size: 3.2rem;
    text-decoration: none;
    @include text-title();
  }
}




</style>