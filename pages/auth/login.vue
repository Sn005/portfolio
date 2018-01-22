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
        v-card-title.headline ログイン
        v-btn(
          color="primary"
          flat 
          large
          @click="signInBySns('google')"
        ) google
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('user')

export default {
  middleware: 'is-authed',
  name: 'login',
  computed: {
    ...mapState({
      auth: state => state.auth
    })
  },
  methods: {
    ...mapActions(['signInBySns'])
  },
  watch: {
    auth () {
      console.log('test')
      this.$router.push({
        path: '/auth/login'
      })
    }
  }
}
</script>