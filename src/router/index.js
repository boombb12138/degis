import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import("../components/main.vue"),
    // children: [

    // ],
  },
  {
    name: "mint页",
    path: "/mint",
    component: () => import("../components/mint-page.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
