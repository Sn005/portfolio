<template lang="pug">
  v-layout(
    column
    justify-center
    align-center
  )
    v-flex(
      xs12
      sm8
      md6
    )
      v-card
        v-card-title.headline ログアウト
        v-btn(
          color="primary"
          flat 
          large
          @click="signOut"
        ) ログアウト
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('user')
export default {
  layout: 'admin',
  computed: {
    ...mapGetters(['auth'])
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