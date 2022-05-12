<template>
  <form>
    <input type="text" name="busca" id="busca" v-model="busca">
    <input type="submit" name="lupa" value="buscar" @click.prevent="buscarProdutos">
    {{busca}}
  </form>   
</template>

<script>
export default {
  name: "ProdutosBuscar",
  data() {
    return {
      busca: ""
    }
  }, 
  methods: {
    buscarProdutos() {
      console.log({query: {q: this.busca}})
      this.$router.push({query: {q: this.busca}})
    }
  }
}
</script>

<style scoped>
</style>