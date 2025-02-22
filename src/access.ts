import router from "@/router";
import { useLoginUserStore } from "@/store/useLoginUserStore";
import { message } from "ant-design-vue";
//全局权限校验
router.beforeEach(async (to, from, next) => {
  const loginUserStore = useLoginUserStore();
  const loginUser = loginUserStore.loginUser;
  const toUrl = to.fullPath;
  if (toUrl.startsWith("/admin")) {
    //如果还未登陆，则跳转到登录页面,如果已经登陆，则判断是否是管理员，如果不是则跳转到主页
    if (!loginUser || loginUser.username == "未登录") {
      message.error("请先登录");
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    } else {
      if (loginUser.userRole !== 1) {
        message.error("权限不足");
        next(`/`);
        return;
      }
    }
  }
  next();
});
