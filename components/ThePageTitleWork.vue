<template lang="pug">
  header.page-title-work
    h1.page-title-work__text {{ item.name }}
    div.page-title-work__inner.page-title-work(:style="styleObject")
    div.page-title-work__arrow--left
    div.page-title-work__arrow--right
</template>
<script>
export default {
  props: {
    item: Object
  },
  data () {
    return {
      styleObject: {
        backgroundImage: 'url(' + this.item.thumbnails[0].url + ')'
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
.page-title-work{
  @include page-title();
  overflow: hidden;
  // page-transitionの際に背景画像が線のようにチラつくので
  // 下記border設定で塗りつぶし対処
  height: 220px;
  border-bottom: 20px solid $bg-body;
  &__inner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 10px);
    opacity: 0.4;
    filter: blur(8px);
    background-size: cover;
  }
  &__text{
    @include text-title();
    @include mq-tab-sp{
      font-size: 2.2rem;
    }
    @include mq-tabl-pcl{
      font-size: 2.8rem;
    }
  }
}
</style>