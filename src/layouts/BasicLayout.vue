<template>
  <div id="basic-layout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/tongxinbumin" target="_blank"
          >个人中心 by 童心不泯
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
//import GlobalHeader from "@/components/GlobalHeader.vue";
//测试代码
// import { getCurrentUser } from "@/api/user";
//
// getCurrentUser().then((res) => {
//   console.log(res);
// });
</script>

<style scoped>
#basic-layout .footer {
  background: #faf8f8;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basic-layout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fff, #05dff3);
}

#basic-layout .header {
  background: linear-gradient(to right, #fff, #05dff3);
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
