<template>
  <v-footer absolute app color="primary" dark elevation="4">
    <span>&copy; {{ new Date().getFullYear() }}</span>
    <v-spacer />
    <span>Postimees proovitöö - Enar Mustonen</span>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped></style>
