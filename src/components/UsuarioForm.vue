<template>
  <form>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" v-model="nome" type="text">
    <label for="email">Email</label>
    <input id="email" name="email" v-model="email" type="email">
    <label for="senha">Senha</label>
    <input id="senha" name="senha" v-model="senha" type="password">
    <label for="cep">Cep</label>
    <input id="cep" name="cep" v-model="cep" type="text">
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
import { mapFields } from "@/helpers.js"

export default {
  name: "UsuarioForm",
  computed: {
    ...mapFields({
      fields: ["nome", "email", "senha", "rua", "numero", "bairro", "cidade", "estado"],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    }),
  }
}
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr ;
  align-items: center;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}

</style>