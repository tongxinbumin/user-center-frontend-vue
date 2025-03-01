import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UserLoginPage from "@/pages/user/UserLoginPage.vue";
import UserRegisterPage from "@/pages/user/UserRegisterPage.vue";
import UserManage from "@/pages/admin/UserManage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      title: "童心用户中心-主页",
      component: () => import("@/pages/HomePage.vue"),
    },
  },
  {
    path: "/user/login",
    name: "userLogin",
    component: UserLoginPage,
    meta: {
      title: "童心用户中心-用户登录",
    },
  },
  {
    path: "/user/register",
    name: "userRegister",
    component: UserRegisterPage,
    meta: {
      title: "童心用户中心-用户注册",
    },
  },
  {
    path: "/admin/userManage",
    name: "userManage",
    component: UserManage,
    meta: {
      title: "童心用户中心-用户管理",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title as string);
  next();
});

export default router;
