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
        path: "home",
        component: () => import("../views/home/home.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/userlist",
    component: layout,
    children: [
      {
        path: "userlist",
        component: () => import("../views/user/userlist.vue"),
      },
    ],
  },
  {
    path: "/goods",
    name: "goods",
    redirect: "/goods/goodsmanager",
    component: layout,
    children: [
      {
        path: "goodsmanager",
        component: () => import("../views/goods/goodsmanager.vue"),
      },
    ],
  },
  {
    path: "/order",
    name: "order",
    redirect: "/order/orderlist",
    component: layout,
    children: [
      {
        path: "orderlist",
        component: () => import("../views/order/orderlist.vue"),
      },
    ],
  },
  {
    path: "/system",
    name: "system",
    redirect: "/system/systemset",
    component: layout,
    children: [
      {
        path: "systemset",
        component: () => import("../views/system/systemset.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
