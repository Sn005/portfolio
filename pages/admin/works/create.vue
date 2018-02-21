<template lang="pug">
  v-layout(column)
    v-card
      form-work(
        :item="item"
      )
</template>
<script>
import FormWork from '~/components/admin/FormWork'
export default {
  transition: 'admin',
  layout: 'admin',
  components: {
    FormWork
  },
  data () {
    return {
      item: {}
    }
  }
}
</script>