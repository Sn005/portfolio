<template lang="pug">
  v-layout(column)
    v-snackbar(
      top
      v-model="$_IsGuest_result"
    ) 変更権限がありません
    v-card
      v-toolbar
        v-toolbar-title About
      v-progress-linear.mt-0(
        v-if="sended"
        :indeterminate="true"
      )
      v-form.pa-4
        v-text-field(
          v-model="item.content"
          textarea
          name="content"
          label="aboutページ本文"
        )
    v-flex(offset-xs5)
      v-btn(
        color="primary"
        large
        @click="send"
      ) 更新する
</template>
<script>
import IsGuest from '~/mixin/IsGuest'
import * as firebaseAbout from '~/api/firebase/about'
export default {
  mixins: [IsGuest],
  transition: 'admin',
  layout: 'admin',
  async asyncData ({ params, error }) {
    const item = await firebaseAbout.item()
    return {
      item: item
    }
  },
  data () {
    return {
      sended: false,
      item: {}
    }
  },
  methods: {
    async send () {
      if (this.$_IsGuest_define()) return
      if (this.sended) return
      this.sended = true
      await firebaseAbout.send(this.item)
      this.sended = false
    }
  }
}
</script>