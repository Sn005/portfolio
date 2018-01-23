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
        ) ログアウト
</template>
<script>
export default {
  layout: 'admin'
}
</script>