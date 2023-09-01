import { createRouter, createWebHistory } from "vue-router";
import { routerConfig } from "@/constants/routerConfig";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerConfig,
});

export default router;
