<template lang="pug">
  v-layout(column)
    v-toolbar
      v-toolbar-title Works
    v-data-table(
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    )
      template(
        slot="items"
        slot-scope="props"
      )
        td {{ props.item.name }}
        td.text-xs-right {{ props.item.id }}
        td.text-xs-right {{ props.item.created }}
        td.text-xs-right
          v-btn(
            flat
            icon
            color="purple lighten-3"
            :to="'works/' + props.item.id"
          )
            v-icon edit
          v-btn(
            flat
            icon
            color="red lighten-1"
            :to="'works/' + props.item.id"
          )
            v-icon delete
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
  },
  data () {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name',
          align: 'left',
          sortable: false
        },
        {
          text: 'Id',
          value: 'id',
          sortable: false
        },
        {
          text: 'Created',
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