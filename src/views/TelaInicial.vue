<template>
  <div class="home" data-app>
    <!-- Filipe -->
    <menu-all></menu-all>
  
    <div class="container">
      
      <h1>FindEgg</h1>
      <p>Encontre os melhores preços de Ovos de Páscoa!</p>
      <p>Os melhores fornecedores e ótimos preços</p>

      <div class="buttons">
        <v-btn
          class="ma-2"
          outlined
          color="indigo">
          Quero Vender!
        </v-btn>

        <v-btn
          class="ma-2"
          outlined
          color="indigo">
          Quero Comprar!
        </v-btn>
      </div>
    </div>

    <buttom-dark></buttom-dark>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import BottomBar from '@/components/shared/BottomBar.vue'
import ButtomDark from '@/components/shared/ButtomDark.vue'
import MenuAll from '@/components/shared/MenuAll.vue'

export default {
  name: 'TelaInicial',
  components: {
    BottomBar,
    ButtomDark,
    MenuAll
    
  }
}
</script>

<style scoped>
  h1 {
    margin-top: 3rem;

    font-size: 50px;
  }

  .container {
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 5;
  }

  div > .buttons {
    display: flex;
    justify-content: center;

  }

</style>
