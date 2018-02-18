<template lang="pug">
  div
    v-form(
      v-model="valid"
      ref="form"
      lazy-validation
    )
      v-text-field(
        label="メールアドレス"
        v-model="email"
        :rules="emailRules"
        required
      )
      v-text-field(
        label="パスワード"
        v-model="password"
        :append-icon="passwordEnter ? 'visibility' : 'visibility_off'"
        :append-icon-cb="() => (passwordEnter = !passwordEnter)"
        :type="passwordEnter ? 'password' : 'text'"
        required
      )
      v-flex(
        text-xs-center
      )
        v-btn(
          flat
          large
          @click="signIn"
        ) ログイン
</template>

<script>
// import * as firebaseContacts from '~/api/firebase/contacts'
export default {
  data () {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスは必須です',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'メールアドレスの形式が間違えています'
      ],
      password: '',
      passwordEnter: true
    }
  },
  computed: {
    formData () {
      return {
        email: this.email,
        password: this.password
      }
    }
  },
  methods: {
    async signIn () {
      if (!this.$refs.form.validate()) return
      await this.$store.dispatch('user/signInByEmail', this.formData)
      this.$router.push({
        path: '/admin'
      })
    }
  }
}
</script>