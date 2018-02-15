<template lang="pug">
  div.card-article
    slot
</template>
<style scoped lang="scss">
@import "../assets/style/scss/_all";
.card-article{
  background: $primary-white;
  box-shadow:0 3px 2px 1px rgba($true-black, 0.9);
  @include mq-tab-sp{
    padding: 16px;
  }
  @include mq-tabl-pcl{
    padding: 24px;
  }
}
</style>