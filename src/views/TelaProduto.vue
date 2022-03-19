<template>
  <v-app>
    <!-- Pedro -->
    <v-container class="mb-16">
      <v-img :src="produto.imagem"></v-img>
      <div id="preco-nome">
        <h1 class="text-h5 text--primary">{{ produto.nome }}</h1>
        <p>R$ {{ produto.preco }}</p>
      </div>
      <div id="subtitle">
        <p>{{ produto.sabor }}</p>
      </div>
      <div>
        <h2 class="text-h6">Dados do vendedor:</h2>
        <p class="mb-0">{{ produto.local.nome }}</p>
        <p class="mb-0">CEP: {{ produto.local.cep }}</p>
        <p>Endereço: {{ produto.local.endereco }}</p>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "TelaProduto",
  data: () => ({
    produto: {},
  }),

  methods: {
    getProduto() {
      fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
        .then((resp) => resp.json())
        .then((data) => {
          for (const produto of data) {
            if (produto["id"] == this.$route.params.id) {
              this.produto = produto;
            }
          }
        });
    },
  },

  created() {
    this.getProduto();
  },
};
</script>

<style scoped>
.preco-nome > p {
  display: flex;
}

.subtitle > p {
  margin-top: 10px;
  color: rgb(177, 177, 177);
}
</style>