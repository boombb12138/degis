import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/main",
    component: () => import("../components/main.vue"),
  },
  {
    path: "/mint",
    component: () => import("../components/mint-page.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
