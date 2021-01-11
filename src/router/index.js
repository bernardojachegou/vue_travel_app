import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/PageHome.vue";
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
         */ "../views/PageDestinationDetails"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "ExperienceDetails",
        props: true,
        compoent: () =>
          import(
            /* webpackChunkName: "ExperienceDetails"
             */ "../views/PageExperienceDetails"
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
    path: "/user",
    name: "User",
    component: () =>
      import(
        /* webpackChunkName: "User"
         */ "../views/PageUser.vue"
      ),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "Login"
         */ "../views/PageLogin.vue"
      ),
  },
  {
    path: "/invoices",
    name: "Invoices",
    component: () =>
      import(/* webpackChunkName: "Invoices" */ "../views/PageInvoices"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/404",
    alias: "*",
    name: "PageNotFound",
    component: () =>
      import(
        /* webpackChunkName: "PageNotFound"
         */ "../views/PageNotFound.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 140 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
});

// creating a secuirty guard;

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "Login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
