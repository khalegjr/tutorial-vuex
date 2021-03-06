import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/favoritos",
    name: "Favoritos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "favoritos" */ "../views/Favoritos.vue"),
  },
];

let router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
