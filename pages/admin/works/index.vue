<template lang="pug">
  v-layout(column)
    v-toolbar()
      v-toolbar-title Works
      v-spacer
      v-btn(
        icon
        @click.native.stop="dialog.sort = true"
      )
        v-icon sort
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
            @click.native.stop="dialog.delete = true"
          )
            v-icon delete
    v-dialog(
      v-model="dialog.delete"
      persistent
      max-width="290"
    )
      v-card
        v-card-title このアイテムを削除しますか？
        v-card-actions
          v-spacer
          v-btn(
            flat
            @click.native="dialog.delete = false"
          ) いいえ
          v-btn(
            flat
            @click.native="dialog.delete = false"
          ) はい
    v-dialog(
      v-model="dialog.sort"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay=false
      scrollable
    )
      v-card
        v-toolbar
          v-toolbar-title 表示順変更
        v-card-actions
          v-spacer
          v-btn(
            flat
            @click.native="dialog.sort = false"
          ) いいえ
          v-btn(
            flat
            @click.native="dialog.sort = false"
          ) はい
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
      dialog: {
        delete: false,
        sort: false
      },
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