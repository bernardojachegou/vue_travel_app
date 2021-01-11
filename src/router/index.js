import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails"
         */ "../views/DestinationDetails"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        compoent: () =>
          import(
            /* webpackChunkName: "ExperienceDetails"
             */ "../views/ExperienceDetails"
          ),
      },
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "PageNotFound" });
      }
    },
  },
  {
    path: "/404",
    alias: "*",
    name: "PageNotFound",
    component: () =>
      import(
        /* webpackChunkName: "ExperienceDetails"
         */ "../views/PageNotFound.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
