<template>
  <div class="bottom-bar" data-app>
    <!-- Naomi -->
    <v-bottom-navigation :value="value" color="teal" active-class="white" grow fixed>
  
      <router-link to="/">
        <v-btn class="botoes">
          <span>Início</span>

          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>

    <router-link to="/sobrenos">
      <v-btn class="botoes">
          <span>Sobre nós</span>
        
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/produtos">
      <v-btn class="botoes">
        <span>Ovos</span>
        

        <v-icon>mdi-candy</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/login">
      <v-btn class="botoes">
        <span>Login</span>
        
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </router-link>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data: () => ({ value: 0 }),
};
</script>

<style scoped>
.botoes {
  background-color: none;
  color: black;
}
.bottom-bar a {
  color: blue-lighten-1;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-grow: 2;
}
</style>