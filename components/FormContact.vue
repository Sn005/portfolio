<template lang="pug">
  div
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
        ) 送信
</template>
<script>
  export default{
    data () {
      return {
        subject: '',
        email: '',
        content: '',
        subjectRules: [
          (v) => !!v || '件名は必須です',
          (v) => v.length <= 20 || '件名は20文字以内に収めてください'
        ]
      }
    }
  }
</script>
