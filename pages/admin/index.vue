<template lang="pug">
  v-layout(column)
    v-toolbar
      v-toolbar-title Dashboard
    v-card
      v-card-title.headline ログアウト
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')
export default {
  layout: 'admin',
  computed: {
    ...mapGetters(['auth'])
  }
}
</script>