<template lang="pug">
  div
    div.the-drawer__trigger(
      @click="toggleDrawer"
      :class="[status,this.$route.name]"
    )
      btn-menu(
        :isActive="isDrawer"
      )
    div.the-drawer(
      :class="{ active: isDrawer }"
    )
      app-gnav.the-drawer__inner
</template>
<script>
  import { createNamespacedHelpers } from 'vuex'
  import AppGnav from '~/components/AppGnav'
  import BtnMenu from '~/components/BtnMenu'
  const { mapGetters, mapActions } = createNamespacedHelpers('app')
  export default {
    data () {
      return {
        status: 'before'
      }
    },
    components: {
      AppGnav,
      BtnMenu
    },
    computed: {
      ...mapGetters(['isDrawer'])
    },
    methods: {
      ...mapActions(['toggleDrawer'])
    },
    mounted () {
      this.status = 'enter'
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.the-drawer{
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(darken($primary-color, 20%), 0.95);
  z-index: index($z, the-drawer);
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s $easeInOutQuad;
  &.active{
    visibility: visible;
    opacity: 1;
  }
  &__inner{
    @include set-mid-mid();
  }
  &__trigger{
    $delay: map-get($top-quee, theDrawerTrigger);

    display: block;
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: index($z, the-drawer__trigger);
    &.index{
      opacity: 0;
      transition: all 0.5s $delay $easeInOutQuad;
      &.enter{
        opacity: 1;
      }
    }
  }
}
</style>