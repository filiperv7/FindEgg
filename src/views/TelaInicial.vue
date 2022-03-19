<template>
  <div class="home" data-app>
    <!-- Filipe -->
  
    <div class="container">
      
      <h1>FindEgg</h1>
      <p>Encontre os melhores preços de Ovos de Páscoa!</p>
      <p>Os melhores fornecedores e ótimos preços</p>

      <div class="buttons">
        <router-link to="/cadastro">
          <v-btn
            class="ma-2"
            outlined
            color="indigo">
            Cadastre-se
          </v-btn>
        </router-link>

      </div>
    </div>

    
  </div>
</template>

<script>

export default {
  name: 'TelaInicial',
  components: {    
  }
}
</script>

<style scoped>
  h1 {
    margin-top: 3rem;

    font-size: 50px;
  }

  a {
    text-decoration: none;
  }

  .container {
    height: 100vh;

    display: flex;
    flex-direction: column;
  }

  div > .buttons {
    display: flex;
    justify-content: center;

  }
</style>
