<template lang="pug">
  v-layout(column)
    v-toolbar
      v-toolbar-title Works
      v-spacer
      v-btn(
        icon
        @click.native.stop="dialog.sort = true"
      )
        v-icon sort
      v-btn(
        icon
        to="works/create"
      )
        v-icon note_add
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
        td {{ props.item.id }}
        td.text-xs-right {{ props.item.order }}
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
                @click="remove(props.item.id)"
              ) はい
    v-dialog(
      v-model="dialog.sort"
      persistent
      scrollable
    )
      v-card
        v-toolbar
          v-toolbar-title 表示順変更
          v-spacer
          v-btn(
            icon
            @click.native="dialog.sort = false"
          )
            v-icon clear
        v-progress-linear.mt-0(
          v-if="isSend"
          :indeterminate="true"
        )
        v-list
          draggable(
            :list = "items"
            @end="dragEnd"
          )
            v-list-tile.px-4(
              v-for="item in items"
              @click=""
            )
              v-list-tile-content(v-text="item.name")
              v-list-tile-action
                v-icon open_with
</template>
<script>
import {
  items as firebaseWorksItems,
  send as firebaseWorksSend,
  remove as firebaseWorksRemove
} from '~/api/firebase/works'
import draggable from 'vuedraggable'
export default {
  layout: 'admin',
  async asyncData () {
    const items = await firebaseWorksItems()
    return {
      items: items.sort((a, b) => {
        if (a.order < b.order) return -1
        if (a.order > b.order) return 1
        return 0
      })
    }
  },
  components: {
    draggable
  },
  data () {
    return {
      isSend: false,
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
          align: 'left',
          sortable: false
        },
        {
          text: '表示順',
          value: 'order'
        },
        {
          text: 'Action',
          value: 'action',
          sortable: false
        }
      ]
    }
  },
  methods: {
    async remove (id) {
      const result = await firebaseWorksRemove(id)
      if (!result) return
      this.dialog.delete = false
      this.items = this.items.filter(item => {
        return item.id !== id
      })
    },
    async dragEnd () {
      this.isSend = true
      const newItems = this.items.map((item, index) => {
        item.order = index + 1
        return item
      })
      for (let item of newItems) {
        await firebaseWorksSend(item.id, item)
      }
      this.isSend = false
      this.items = newItems
    }
  }
}
</script>