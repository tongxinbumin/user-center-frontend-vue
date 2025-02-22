<template>
  <div id="globalheader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">童心用户中心</div>
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuclick"
        />
      </a-col>
      <a-col flex="80px">
        <div class="use-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ (loginUserStore.loginUser.username = formState.username) }}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons-vue";
import { MenuProps } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useLoginUserStore } from "@/store/useLoginUserStore";

const loginUserStore = useLoginUserStore();

const router = useRouter();
// 路由跳转事件
const doMenuclick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};
const current = ref<string[]>(["mail"]);
//更新路由变化，更新当前菜单选中后的状态
router.afterEach((to, from, failure) => {
  current.value = [to.path];
});
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/user/login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/user/register",
    label: "用户注册",
    title: "用户注册",
  },
  {
    key: "/admin/userManage",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
  {
    key: "/alipay",
    label: h(
      "a",
      { href: "https://github.com/tongxinbumin", target: "_blank" },
      "支持我们"
    ),
    title: "支持我们",
  },
]);
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 48px;
  height: 48px;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-left: 16px;
  color: black;
}

::v-deep(.ant-menu) {
  background: linear-gradient(to right, #e6fafa, #07ddf1);
}

::v-deep(.ant-menu-item) {
  color: black;
}
</style>
