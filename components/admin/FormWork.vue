<template lang='pug'>
  div
    v-snackbar(
      top
      v-model="isGuest"
    ) 変更権限がありません
    v-snackbar(
      top
      v-model="posted"
    ) 更新完了しました
    v-toolbar
      v-toolbar-title(
        v-text="isExits ? name : '新規登録'"
      )
    v-progress-linear.mt-0(
      v-if="sended"
      :indeterminate="true"
    )
    v-form.pa-4(v-model="valid")
      v-switch(
        :label=`isShow ? "表示": "非表示"`
        v-model="isShow"
      )
      v-text-field(
        label="ID"
        v-model="id"
        disabled
        v-if="isExits"
      )
      v-text-field(
        label="ID"
        v-model="id"
        :rules="idRules"
        :counter="10"
        required
        v-else
      )
      v-text-field(
        label="Name"
        v-model="name"
        :rules="nameRules"
        :counter="20"
        required
      )
      v-text-field(
        label="本文"
        v-model="content"
        textarea
        required
      )
      v-text-field(
        label="担当領域"
        v-model="assign"
        required
      )
      v-text-field(
        label="使用スキル"
        v-model="skill"
        required
      )
      v-text-field(
        label="サイトURL"
        v-model="url"
      )
      div.mt-4
        p.title サムネイル画像
        v-btn
          | upload
          input.file-input(
            type="file"
            ref="image"
            name="thumbnails"
            accept="*"
            @change="onFileChange($event, 'thumbnails')"
          )
        v-flex(
          xs8
          v-if="thumbnails"
          v-for="thumbnail in thumbnails"
          :key="thumbnail.url"
        )
          img(
            width="100%"
            :src="thumbnail.url"
          )
      p.title.mt-4 ポートフォリオ画像
      v-btn
        | upload
        input.file-input(
          type="file"
          ref="image"
          name="images"
          accept="*"
          multiple="multiple"
          @change="onFileChange($event, 'images')"
        )
      v-container(
        fluid
        grid-list-lg
      )
        v-layout(
          row
          wrap
        )
          v-flex(
            xs4
            v-if="images"
            v-for="image in images"
            :key="image.url"
          )
            v-card(
              flat
              tile
            )
              v-card-media.text-xs-right(
                :src="image.url"
                height="150px"
              )
                v-btn(
                  icon
                  offset-md2
                  @click="deleteImage(image.path)"
                )
                  v-icon delete
    v-flex(offset-xs5)
      v-btn(
        color="primary"
        large
        @click="send"
        v-html="isExits ? '更新する' : '登録する'"
      )
</template>
<script>
import { send as firebaseWorksSend } from '~/api/firebase/works'
import {
  send as storageSend,
  remove as storageRemove,
  fetchs as storageFetchs
} from '~/api/firebase/partial/storage'
import IsGuest from '~/mixin/IsGuest'
export default {
  mixins: [IsGuest],
  props: {
    item: Object
  },
  data () {
    return {
      posted: false,
      isExits: !!this.item.id,
      sended: false,
      valid: false,
      title: this.item.id ? this.item.name : '新規登録',
      id: this.item.id || '',
      name: this.item.name || '',
      category: this.item.category ? Object.keys(this.item.category) : [],
      content: this.item.content || '',
      assign: this.item.assign || '',
      skill: this.item.skill || '',
      url: this.item.url || '',
      thumbnails: this.item.thumbnails || [],
      images: this.item.images || [],
      isShow: this.item.isShow || false,
      order: this.item.order || 999,
      nameRules: [
        (v) => !!v || '名称は必須です',
        (v) => v.length <= 20 || '名称は20文字以内に収めてください'
      ],
      idRules: [
        (v) => !!v || 'IDは必須です',
        (v) => v.length <= 10 || 'IDは10文字以内に収めてください',
        (v) => /^[a-zA-Z0-9]+$/.test(v) || '半角英数字のみ使用可能です'
      ]
    }
  },
  computed: {
    formData () {
      return {
        id: this.id,
        name: this.name,
        isShow: this.isShow,
        order: this.order,
        content: this.content,
        assign: this.assign,
        skill: this.skill,
        url: this.url,
        thumbnails: this.thumbnails,
        images: this.images
      }
    }
  },
  methods: {
    async onFileChange (event, target) {
      if (this.$_IsGuest_define()) return
      this.sended = true
      const files = event.target.files || event.dataTransfer.files
      if (!files.length) return
      const datas = [...files].map((file, index) => {
        return {
          path: `works/${this.id}/${target}/${file.name}`,
          file: file
        }
      })
      const result = await storageSend(datas)
      if (target === 'images') {
        const newImages = result ? await storageFetchs(datas) : []
        this[target] = [...this[target], ...newImages]
      } else {
        this[target] = result ? await storageFetchs(datas) : []
      }
      this.sended = false
    },
    async send () {
      if (this.$_IsGuest_define()) return
      if (this.sended) return
      this.sended = true
      this.posted = false
      await firebaseWorksSend(this.id, this.formData)
      this.sended = false
      this.posted = true
    },
    async deleteImage (path) {
      this.sended = true
      this.posted = false
      if (this.$_IsGuest_define()) return
      if (this.sended) return
      await storageRemove(path)
      this.images = this.images.filter(value => {
        return value.path !== path
      })
      await firebaseWorksSend(this.id, this.formData)
      this.sended = false
      this.posted = true
    }
  }
}
</script>
<style scoped lang="scss">
.file{
  &-btn{
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  &-input{
    position: absolute;
    top: 0;
    right: 0;
    min-width: 100%;
    min-height: 100%;
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
  }
}
</style>