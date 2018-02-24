<template lang="pug">
  v-layout(column)
    v-toolbar
      v-toolbar-title Contacts
    div(v-if="role !=='guest'")
      v-data-table(
        :headers="headers"
        :items="items"
        class="elevation-4"
      )
        template(
          slot="items"
          slot-scope="props"
        )
          td {{ props.item.subject }}
          td.text-xs-right {{ props.item.created }}
          td.text-xs-right
            v-btn(
              flat
              icon
              color="purple lighten-3"
              :to="'/admin/contacts/' + props.item.id"
            )
              v-icon redo
    v-card.pa-4(v-else) 表示権限がありません
</template>
<script>
import IsGuest from '~/mixin/IsGuest'
import * as firebaseContacts from '~/api/firebase/contacts'
export default {
  mixins: [IsGuest],
  transition: 'admin',
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
          text: '件名',
          value: 'subject',
          align: 'left',
          sortable: false
        },
        {
          text: '投稿日',
          align: 'right',
          value: 'created'
        },
        {
          text: 'Action',
          value: 'action',
          align: 'right',
          sortable: false
        }
      ]
    }
  }
}
</script>