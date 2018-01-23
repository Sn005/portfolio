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
    v-toolbar(
      fixed
      app
      :clipped-left="clipped"
    )
      v-toolbar-side-icon(@click="drawer = !drawer")
      v-btn(
        icon
        @click.stop="miniVariant = !miniVariant"
      )
        v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")
    v-content
      v-container
        nuxt
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Dashboard', to: '/admin' },
          { icon: 'home', title: 'Home', to: '/' }
        ],
        miniVariant: true,
        title: 'Vuetify.js'
      }
    }
  }
</script>
