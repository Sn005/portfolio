<template lang="pug">
  v-layout(column)
    v-toolbar
      v-toolbar-title Contacts
    v-data-table(
      :headers="headers"
      :items="items"
      class="elevation-4"
    )
      template(
        slot="items"
        slot-scope="props"
      )
        td {{ props.item.title }}
        td.text-xs-right {{ props.item.created }}
        td.text-xs-right
          v-btn(
            flat
            icon
            color="purple lighten-3"
            :to="'contacts/' + props.item.id"
          )
            v-icon redo
</template>
<script>
import * as firebaseContacts from '~/api/firebase/contacts'
export default {
  layout: 'admin',
  async asyncData () {
    return {
      items: await firebaseContacts.items()
    }
  },
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title',
          align: 'left',
          sortable: false
        },
        {
          text: '投稿日',
          value: 'created'
        },
        {
          text: 'Action',
          value: 'action',
          sortable: false
        }
      ]
    }
  }
}
</script>