<template lang="pug">
  div
    v-form(
      v-model="valid"
      ref="form"
      lazy-validation
    )
      v-text-field(
        label="メールアドレス"
        v-model="email"
        :rules="emailRules"
        required
      )
      v-text-field(
        label="件名"
        v-model="subject"
        :rules="subjectRules"
        :counter="20"
        required
      )
      v-text-field(
        label="本文"
        v-model="content"
        textarea
        rows="10"
        required
      )
      v-layout(
        align-center
      )
        v-flex(
          xs12
          text-xs-center
        )
          v-btn(
            flat
            large
            @click="check"
            :disabled="!valid"
          ) 確認
          v-btn(
            flat
            large
            @click="clear"
          ) リセット
    v-dialog(
      v-model="checked"
      persistent
      scrollable
      max-width="720"
    )
      v-card.pa-4
        div(
          v-if="!sended"
        )
          v-card-title 下記内容でよろしいでしょうか？
          v-card-text
            div.check-content
              div.mb-4
                p.title タイトル
                p {{subject}}
              div.mb-4
                p.title メールアドレス
                p {{email}}
              div.mb-4
                p.title 本文
                p {{content}}
          v-card-actions
            v-spacer
            v-btn(
              flat
              @click="checked = false"
            ) いいえ
            v-btn(
              flat
              @click="send"
            ) はい
        div(v-if="sended && !error")
          | 送信完了しました。
          br
          | 後ほど返信いたしますので、少々お待ちください。
        div(v-if="sended && error")
          | 送信できませんでした。
          br
          | 申し訳ありませんが、再送信お願い致します。
</template>
<script>
// import * as firebaseContacts from '~/api/firebase/contacts'
export default{
  data () {
    return {
      valid: true,
      checked: false,
      sended: false,
      error: false,
      subject: '',
      subjectRules: [
        (v) => !!v || '件名は必須です',
        (v) => v.length <= 20 || '件名は20文字以内に収めてください'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'メールアドレスは必須です',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'メールアドレスの形式が間違えています'
      ],
      content: ''
    }
  },
  computed: {
    formData () {
      return {
        subject: this.subject,
        email: this.email,
        content: this.content
      }
    }
  },
  methods: {
    clear () {
      console.log(this.$refs.form.reset)
    },
    check () {
      if (!this.$refs.form.validate()) return
      this.checked = true
    },
    async send () {
      // const result = await firebaseContacts.send(this.formData)
      const result = true
      this.sended = true
      if (!result) this.error = true
      setTimeout(() => {
        this.checked = false
      }, 1000)
      setTimeout(() => {
        this.sended = false
        this.error = false
      }, 2000)
    }
  }
}
</script>
<style lang="scss" scoped>
.check-content{
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>

