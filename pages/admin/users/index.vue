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
        v-card-title.headline ユーザー一覧
</template>
<script>
export default {
  transition: 'admin',
  layout: 'admin'
}
</script>