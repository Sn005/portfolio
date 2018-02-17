<template lang="pug">
  div.card-article
    slot
</template>
<style scoped lang="scss">
@import "../assets/style/scss/_all";
.card-article{
  background: $primary-white;
  box-shadow:0 3px 2px 1px rgba($true-black, 0.9);
  opacity: 0;
  animation: cardArticle 1s 1.5s $easeOutQuad forwards;
  @include mq-tab-sp{
    padding: 16px;
  }
  @include mq-tabl-pcl{
    padding: 24px;
  }
}
  @keyframes cardArticle {
    0% {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
</style>