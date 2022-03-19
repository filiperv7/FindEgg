<template>
  <div class="tela-login">
    <v-app >
      <v-container >

       
        <div class="principal rounded-lg px-5 py-5">
            <h2 class="text-center">Login</h2>
        <v-form ref="form" v-model="valid" lazy-validation>
        
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

           <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Senha"
            required
            type= "password"
          ></v-text-field>

          <v-dialog transition="dialog-bottom-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                :disabled="!valid"
                color="blue lighten-1"
                class="mr-4"
                @click="validate"
                >Enviar</v-btn
              >
            </template>

            <template v-if="flag" v-slot:default="dialog">
              <v-card>
                <v-toolbar color="blue lighten-1" dark>Enviado</v-toolbar>
                <v-card-text>
                  <div class="text-left pt-5">
                    Informações incluídas com sucesso!
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Fechar</v-btn>
                </v-card-actions>
              </v-card>
            </template>

            <template v-else v-slot:default="dialog">
              <v-card>
                <v-toolbar color="error" dark>Não enviado</v-toolbar>
                <v-card-text>
                  <div class="text-left pt-5">
                    É necessário preencher todos os campos!
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Fechar</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>

          <v-btn color="yellow lighten-2" class="mr-4" @click="reset"> Limpar </v-btn>
        </v-form>
        </div>
     </v-container>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: "TelaLogin",
  data: () => ({
    flag: false,
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Senha não foi inserido"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail não foi inserido",
      (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    ],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      this.flag = this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
  },
    
  }
</script>

<style scoped>
.principal{
  position: relative;
  top: 60%;
  transform: translate-y(-50%);
  border: solid black 1px;
}
</style>