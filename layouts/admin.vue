<template lang="pug">
  v-app.app-body(
    id="admin"
    dark
  )
    v-navigation-drawer(
      v-model="drawer"
      clipped
      fixed
      app
    )
      v-list
        v-list-tile(
          router
          :to="item.to"
          v-for="item in items"
          :key="item.title"
          exact
        )
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
        v-list-tile(@click="signOut")
          v-list-tile-action
            v-icon reply_all
          v-list-tile-content
            v-list-tile-title Sign out
    v-toolbar(
      fixed
      app
      clipped-left
    )
      v-toolbar-side-icon(
        @click="drawer = !drawer"
      )
      v-toolbar-title narihara portfolio管理画面
    v-content
      v-container
        nuxt
</template>

<script>
  export default {
    middleware: 'check-auth',
    data () {
      return {
        drawer: true,
        items: [
          { icon: 'apps', title: 'Dashboard', to: '/admin' },
          { icon: 'build', title: 'Works', to: '/admin/works' },
          { icon: 'perm_identity', title: 'About', to: '/admin/about' },
          { icon: 'contacts', title: 'Contacts', to: '/admin/contacts' },
          { icon: 'home', title: 'Home', to: '/' }
        ]
      }
    },
    methods: {
      async signOut () {
        await this.$store.dispatch('user/signOut')
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style lang="scss">
@import "../assets/style/scss/_all";
#admin{
  font-family: $base-font;
}
</style>