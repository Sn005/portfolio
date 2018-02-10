<template lang="pug">
  v-layout(column)
    v-card
      v-toolbar
        v-toolbar-title About
      v-progress-linear.mt-0(
        v-if="isSend"
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
import * as firebaseAbout from '~/api/firebase/about'
export default {
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
      isSend: false,
      item: {}
    }
  },
  methods: {
    async send () {
      if (this.isSend) return
      this.isSend = true
      await firebaseAbout.send(this.item)
      this.isSend = false
    }
  }
}
</script>