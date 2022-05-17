import { createRouter, createWebHashHistory } from "vue-router";

import layout from "../layout/layout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: layout,
    children: [
      {
        path: "/home",
        component: () => import("../views/home/home.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    redirect: "/userlist",
    component: layout,
    children: [
      {
        path: "/userlist",
        component: () => import("../views/user/userlist.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
