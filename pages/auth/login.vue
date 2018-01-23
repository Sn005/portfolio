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
          @click="signIn"
        ) google
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapGetters } = createNamespacedHelpers('user')

export default {
  middleware: 'is-authed',
  name: 'login',
  data () {
    return {
      email: ''
    }
  },
  computed: {
    ...mapGetters(['auth', 'account'])
  },
  methods: {
    ...mapActions(['signInBySns']),
    async signIn () {
      // const method = this.email ? this.signInByEmail : this.signInBySns
      const method = this.signInBySns
      await method('google')
      this.$router.push({
        path: '/admin'
      })
    }
  }
  // watch: {
  //   auth () {
  //     this.$router.push({
  //       path: '/auth/login'
  //     })
  //   }
  // }
}
</script>