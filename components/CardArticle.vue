<template lang="pug">
  v-flex(
    md10
    xs12
    offset-md1
  )
    div.card-article
      slot
</template>
<style scoped lang="scss">
@import "../assets/style/scss/_all";
.card-article{
  background: $primary-white;
  box-shadow: $card-shadow;
  opacity: 0;
  animation: fadeInUp 1s 1.5s $easeOutQuad forwards;
  @include mq-tab-sp{
    padding: 16px;
  }
  @include mq-tabl-pcl{
    padding: 24px;
  }
}
</style>