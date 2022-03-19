<template>
  <div id="lista-produtos">
    <!-- Pedro -->
    <v-card
      v-for="produto of produtos"
      :key="produto.id"
      class="mx-auto my-3"
      elevatio="4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 my-3">
            {{ produto.nome }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ produto.sabor }}
          </v-list-item-subtitle>
          <p class="my-5">R$ {{ produto.preco }}</p>
        </v-list-item-content>
        <v-list-item-avatar tile size="100">
          <v-img :src="produto.imagem"></v-img>
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <router-link :to="{ name: 'produto', params: { id: produto.id } }">
          <v-btn outlined rounded text> Ver </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ListaProdutos",
  data: () => ({
    produtos: [],
  }),

  methods: {
    getFornecedores() {
      fetch("https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json")
        .then((resp) => resp.json())
        .then((data) => {
          this.produtos = data;
        });
    },
  },

  created() {
    this.getFornecedores();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>