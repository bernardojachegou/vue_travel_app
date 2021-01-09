import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: () =>
      import(
        /* webpackChunkName: "brazil"
         */ "../views/Brazil"
      ),
  },
  {
    path: "/panama",
    name: "Panama",
    component: () =>
      import(
        /* webpackChunkName: "panama"
         */ "../views/Panama"
      ),
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: () =>
      import(
        /* webpackChunkName: "hawaii"
         */ "../views/Hawaii"
      ),
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: () =>
      import(
        /* webpackChunkName: "jamaica"
         */ "../views/Jamaica"
      ),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
