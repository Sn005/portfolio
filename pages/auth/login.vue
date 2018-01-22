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
const { mapActions } = createNamespacedHelpers('user')

export default {
  name: 'login',
  methods: {
    signInBySns (sns) {
      console.log(sns)
    }
    // ...mapActions(['signInBySns'])
  }
}
</script>