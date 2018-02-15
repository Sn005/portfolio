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
      status: 'before',
      styleObject: {
        backgroundImage: 'url(' + this.item.thumbnails[0].url + ')'
      }
    }
  },
  mounted () {
    this.status = 'entry'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
.page-title-work{
  @include page-title();
  // page-transitionの際に背景画像が線のようにチラつくので
  // 下記border設定で塗りつぶし対処
  border-bottom: 10px solid $bg-body;
  &__inner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% + 10px);
    opacity: 0.4;
  }
  &__text{
    background-size: cover;
    @include text-title();
  }
}
</style>