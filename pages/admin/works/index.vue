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
      v-toolbar
        v-toolbar-title Works
      v-list
        v-list-tile(
          router
          :to="'works/' + item.id"
          :key="i"
          v-for="(item, i) in items"
          exact
        )
          v-list-tile-action
            v-icon(v-html="apps")
          v-list-tile-content
            v-list-tile-title(v-text="item.name")
</template>
<script>
import { items as firebaseWorksItems } from '~/api/firebase/works'
export default {
  layout: 'admin',
  async asyncData () {
    const items = await firebaseWorksItems()
    return {
      items: items
    }
  }
}
</script>