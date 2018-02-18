<template lang="pug">
div
  v-card
    v-toolbar
      v-toolbar-title ログイン
    div.pa-3
      form-sign-in
    v-flex(
      text-xs-center
    )
      v-btn(
        flat 
        large
        @click="signInBySns('google')"
      ) Googleでログイン/登録
</template>
<script>
import FormSignIn from '~/components/FormSignIn'
export default {
  layout: 'auth',
  middleware: 'is-authed',
  name: 'login',
  components: {
    FormSignIn
  },
  data () {
    return {
      email: '',
      password: ''
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