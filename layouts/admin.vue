<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    )
      v-list
        v-list-tile(
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        )
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-content
      v-container
        nuxt
</template>

<script>
  export default {
    middleware: 'check-auth',
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        items: [
          { icon: 'apps', title: 'Dashboard', to: '/admin' },
          { icon: 'account_circle', title: 'ユーザー一覧', to: '/admin/users' },
          { icon: 'home', title: 'Home', to: '/' }
        ],
        title: 'Vuetify.js'
      }
    }
  }
</script>
