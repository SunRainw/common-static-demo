import type { RouteRecordRaw } from "vue-router";

export const routerConfig: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
      icon: "HomeOutlined"
    },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
];
