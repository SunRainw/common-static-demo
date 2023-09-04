import { createRouter, createWebHashHistory } from "vue-router";
import { routerConfig } from "@/constants/routerConfig";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routerConfig,
});

export default router;
