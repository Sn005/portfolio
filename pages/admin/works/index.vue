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
        v-card-title.headline Works
</template>
<script>
import { list as firebaseWorksList } from '~/api/firebase/works'
export default {
  layout: 'admin',
  async asyncData () {
    const list = await firebaseWorksList()
    return {
      list: list
    }
  }
}
</script>