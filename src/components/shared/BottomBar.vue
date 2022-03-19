<template>
  <div class="bottom-bar">
    <!-- Naomi -->
      <v-bottom-navigation
    :value="value"
    color="teal"
    active-class= "white"
     grow
  >
    <v-btn class="botoes">
      <router-link to="/">
        <span>Início</span>
      </router-link>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn class="botoes">
      <router-link to="/sobrenos">
        <span>Sobre nós</span>
      </router-link>

      <v-icon>mdi-heart</v-icon>
    </v-btn>

        <v-btn class="botoes">
      <router-link to="/fornecedores">
        <span>Ovos</span>
      </router-link>

      <v-icon>mdi-candy</v-icon>
    </v-btn>

    <v-btn class="botoes">
      <router-link to="/login">
        <span>Login</span>
      </router-link>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    name: 'BottomBar',
    data: () => ({ value: 0 }),
  }
</script>

<style scoped>
  .botoes {
    background-color: none;
  }
  .bottom-bar a{
    color: black;
    text-decoration: none;
    display:flex;
    justify-content: center;
    flex-grow: 1;
}
</style>