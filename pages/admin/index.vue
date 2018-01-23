<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      admin
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  layout: 'admin',
  middleware: 'check-auth'
}
</script>