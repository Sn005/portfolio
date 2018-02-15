<template lang="pug">
  div.card-article-content
    slot
</template>
<style scoped lang="scss">
.card-article-content{
  font-size: 1.6rem;
  line-height: 1.65;
  white-space: pre-wrap;
  word-wrap: break-word;
  // p + p {
  //   margin-top: 16px;
  // }
}
</style>