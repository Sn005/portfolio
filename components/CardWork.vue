<template lang="pug">
  div.card-wors(
    :style="styleObject"
  ) {{ item.name }}
</template>
<script>
  export default{
    props: {
      item: Object
    },
    data () {
      return {
        styleObject: {
          backgroundImage: 'url(' + this.item.eyecatchs[0].url + ')'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
@import "../assets/style/scss/_all";

.card-wors{
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 62%;
  background-size: cover;
}


</style>