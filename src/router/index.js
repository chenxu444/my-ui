import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: () => import('../pages/index.vue'),
    meta: {
      keepAlive: true
    }

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
