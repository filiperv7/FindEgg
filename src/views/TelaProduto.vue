<template>
  <v-app>
    <!-- Pedro -->
    <v-container class="mb-16">
      <v-img :src="produto.imagem"></v-img>
      <h1 class="text-h5 text--primary">{{ produto.nome }}</h1>
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
</style>