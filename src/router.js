import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProdutoItem from "@/views/ProdutoItem.vue";
import LogIn from "@/views/LogIn.vue";
import UsuarioView from "@/views/usuario/UsuarioView.vue";

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
      name: "usuario",
      component: UsuarioView,
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});