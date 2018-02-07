<template lang="pug">
  div
    div.page-drawer__trigger(
      @click="toggleDrawer"
      :class="status"
    )
      btn-menu(
        :flg="isDrawer"
      )
    div.page-drawer(
      :class="{ active: isDrawer }"
    )
      app-gnav.page-drawer__inner
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
      this.status = 'entry'
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.page-drawer{
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(darken($primary-color, 20%), 0.95);
  z-index: index($z, the-page-drawer);
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
    display: block;
    position: fixed;
    top: 32px;
    right: 32px;
    z-index: index($z, the-page-drawer__trigger);
    opacity: 0;
    transition: all 0.5s 2s $easeInOutQuad;
    &.entry{
      opacity: 1;
    }
  }
}
</style>