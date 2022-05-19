import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProdutoItem from "@/views/ProdutoView.vue";
import LogIn from "@/views/LogIn.vue";
import UsuarioView from "@/views/usuario/UsuarioView.vue";
import UsuarioProdutos from "@/views/usuario/UsuarioProdutos.vue";
import UsuarioVendas from "@/views/usuario/UsuarioVendas.vue";
import UsuarioCompras from "@/views/usuario/UsuarioCompras.vue";
import UsuarioEditar from "@/views/usuario/UsuarioEditar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/produto/:id",
      name: "produto",
      component: ProdutoItem,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: LogIn,
    },
    {
      path: "/usuario",
      component: UsuarioView,
      children: [
        {
          path: "",
          name: "usuario",
          component: UsuarioProdutos,
        },
        {
          path: "compras",
          name: "compras",
          component: UsuarioCompras,
        },
        {
          path: "vendas",
          name: "vendas",
          component: UsuarioVendas,
        },
        {
          path: "editar",
          name: "usuario-editar",
          component: UsuarioEditar,
        },
      ],
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});
