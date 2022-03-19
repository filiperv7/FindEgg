<template>  
    <!-- Filipe -->
    <v-btn @click="$vuetify.theme.dark = ! $vuetify.theme.dark" fab fixed rigth right bottom color="buttom" class="ml-4">
        <v-icon dark>DARK</v-icon>
    </v-btn>

</template>

<script>
  export default {
    name: 'ButtomDark'
  }
</script>

<style scoped>

</style>