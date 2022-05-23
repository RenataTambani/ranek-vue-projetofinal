<template>
  <form>
    <div class="usuario" v-if="mostrarDadosLogin">
      <label for="nome">Nome</label>
      <input id="nome" name="nome" type="text" v-model="nome">
      <label for="email">Email</label>
      <input id="email" name="email" type="email" v-model="email">
      <label for="senha">Senha</label>
      <input id="senha" name="senha" type="password" v-model="senha">
    </div>   
    <label for="cep">Cep</label>
    <input id="cep" name="cep" v-model="cep" @keyup="preencherCep" type="text">
    <label for="rua">Rua</label>
    <input id="rua" name="rua" v-model="rua" type="text">
    <label for="numero">Numero</label>
    <input id="numero" name="numero" v-model="numero" type="text">
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" v-model="bairro" type="text">
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" v-model="cidade" type="text">
    <label for="estado">Estado</label>
    <input id="estado" name="estado" v-model="estado" type="text">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { getCep } from "@/services.js"

export default {
  name: "UsuarioForm",
  computed: {
    ...mapFields({
      fields: ["nome", "email", "senha", "rua", "numero", "cep", "bairro", "cidade", "estado"],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    }),
    mostrarDadosLogin() {
      return !this.$store.state.login || this.$route.name === "usuario-editar";
    },
    
  }, 
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if(cep.length === 8) {
        getCep(cep).then(response => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.cidade = response.data.localidade;
          this.estado = response.data.uf;
        })
      }
    }
  }
}
</script>

<style scoped>
form,
.usuario {
  display: grid;
  grid-template-columns: 80px 1fr ;
  align-items: center;
}
.usuario {
  grid-column: 1 / 3;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}

</style>