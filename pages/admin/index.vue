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
const { mapActions } = createNamespacedHelpers('user')
export default {
  layout: 'admin',
  methods: {
    ...mapActions(['signOut'])
  }
}
</script>