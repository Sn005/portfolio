<template lang="pug">
  v-layout(column)
    v-toolbar
      v-toolbar-title Dashboard
    v-card
      v-card-text(primary-title)
        | narihara portfolioの管理画面です
        br
        | オーナー権限保有者のみ各種アイテム編集が可能です
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')
export default {
  transition: 'admin',
  layout: 'admin',
  computed: {
    ...mapGetters(['auth'])
  }
}
</script>