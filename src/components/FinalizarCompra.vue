<template>
  <section>
    <h2>Endereço de Envio</h2>
    <UsuarioForm>
      <button @click.prevent="fianlizarCompra" class="btn">Finalizar Compra</button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import {api} from "@/services.js";
import {mapState} from "vuex"

export default {
  name: "FinalizarCompra",
  components: {
    UsuarioForm
  },
  props: ["produto"],
  computed: {
    ...mapState(["usuario"]),
    compra() {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usario_id,
        produto: this.produto,
        endereço: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado
        }
      };
    }
  },
  methods: {
    criarTransacao() {
      api.post("/transacao", this.compra).then(() => {
        this.$router.push({name: "compras"})
      });
    },
    finalizarCompra() {
      this.criarTransacao()
    }
  },

}
</script>

<style>

</style>