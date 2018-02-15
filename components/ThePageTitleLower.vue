<template lang="pug">
  header.page-title-lower
    h1.page-title-lower__text
      slot
    div.page-title-lower__arrow--left
    div.page-title-lower__arrow--right
</template>
<script>
export default {
  data () {
    return {
      status: 'before'
    }
  },
  mounted () {
    this.status = 'entry'
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/scss/_all";
.page-title-lower{
  @include page-title();
  &__text{
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 auto;
    @include mq-tabl-pcl{
      font-size: 2.8rem;
      width: 40%;
    }
    @include mq-tab-sp{
      width: 90%;
      padding-top: 16px;
      font-size: 2.2rem;
    }
    &:before,
    &:after{
      flex: 50%;
      content: '';
      height: 6px;
      border-top: solid 1px $hr-color;
      border-bottom: solid 1px $hr-color;
      z-index: index($z, index-title-border);
      @include mq-tabl-pcl{
        margin:0 16px;
      }
      @include mq-tab-sp{
        margin:0 8px;
      }
    }
  }
}
</style>