<template lang="pug">
  div.page-drawer
    a(@click.prevent="toggleDrawer") test
    app-gnav.page-drawer__inner
</template>
<script>
  import AppGnav from '~/components/AppGnav'
  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters, mapActions } = createNamespacedHelpers('app')
  
  export default {
    components: {
      AppGnav
    },
    computed: {
      ...mapGetters(['drawer'])
    },
    methods: {
      ...mapActions(['toggleDrawer'])
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.page-drawer{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(darken($primary-color, 20%), 0.95);
  z-index: index($z, the-page-drawer);
  &__inner{
    @include set-mid-mid();
  }
}

</style>