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
export default {
  middleware: 'is-authed',
  name: 'login',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    async signInBySns (sns) {
      await this.$store.dispatch('user/signInBySns', sns)
      this.$router.push({
        path: '/admin'
      })
    }
  }
}
</script>