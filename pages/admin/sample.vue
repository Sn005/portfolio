<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      sample
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  middleware: 'check-auth'
}
</script>