import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import VueTimer from "../views/VueTimer.vue";
import VueToDo from "../views/VueToDo.vue";
import Home from "../views/Introduction.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/vuetimer",
    name: "VueTimer",
    component: VueTimer
  },
  {
    path: "/vuetodo",
    name: "VueToDo",
    component: VueToDo
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
