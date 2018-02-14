<template lang="pug">
  header.page-title-work(:style="styleObject")
    h1.page-title-work__text {{ item.name }}
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

  &__text{
    background-size: cover;
    @include text-title();
  }
}
</style>