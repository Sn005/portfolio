<template lang="pug">
  v-layout(column)
    v-card
      v-toolbar
        v-toolbar-title {{ item.title }}
      div.pa-4
        div.mb-4
          p.title タイトル
          p {{item.title}}
        div.mb-4
          p.title メールアドレス
          p {{item.email}}
        div.mb-4
          p.title 本文
          p {{item.content}}
        div
          p.title 投稿日
          p {{item.created}}
</template>
<script>
import * as firebaseContacts from '~/api/firebase/contacts'
export default {
  transition: 'admin',
  layout: 'admin',
  async asyncData ({ params, error }) {
    const item = await firebaseContacts.item(params.id)
    return {
      item: item
    }
  },
  moutend () {
    if (!Object.keys(this.item).length) {
      this.$route.push({
        path: '/admin/contacts'
      })
    }
  }
}
</script>