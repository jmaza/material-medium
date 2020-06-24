import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/HomeGlobal")
      },
      {
        path: "my-feed",
        name: "home-my-feed",
        component: () => import("@/views/HomeMyFeed")
      },
      {
        path: "tag/:tag",
        name: "home-tag",
        component: () => import("@/views/HomeTag")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
