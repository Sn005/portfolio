<template lang="pug">
  v-content
    v-container
      a(href="test") test
      app-logo
</template>
<script>
import AppLogo from '~/components/AppLogo'
export default {
  components: {
    AppLogo
  }
}
</script>
