import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/details",
    name: "Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue")
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Create.vue")
  },
  {
    path: "/edit",
    name: "Edit",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Edit.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
