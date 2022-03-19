<template>
<<<<<<< HEAD
    <v-toolbar dense data-app>
      <v-toolbar-title>
      <v-avatar>
        <img
          src="https://res.cloudinary.com/webalys/image/private/w_200,h_200,ar_1/f_auto/v1/icons/rabbit/rabbit-side-smx0tfviz8ipyzxue76egk.png/rabbit-side-kyn6gpg4hldz5qyjs84h9e.png"
          alt="Logo"
        >
    </v-avatar>
      </v-toolbar-title>
=======
    <v-toolbar dense data-app fixed>
      <v-toolbar-title><img src="https://cdn-icons-png.flaticon.com/512/521/521964.png" /></v-toolbar-title>
>>>>>>> 19893c7220a5832cf3cd7226ba05edc5becaaa6c

      <v-spacer></v-spacer>

      <buttom-dark></buttom-dark>

    <v-btn @click="$vuetify.theme.dark = ! $vuetify.theme.dark" depressed  right color="buttom" class="ml-4">
        <v-icon dark>DARK</v-icon>
    </v-btn>

    </v-toolbar>
</template>

<script>
import ButtomDark from '@/components/shared/ButtomDark.vue'

  export default {
    name: 'MenuAll',
    ButtomDark,

  }
</script>

<style scoped>

img{
  width: 10%;
  height: 10%;
}

</style>