<template>
  <div id="userManage">
    <a-input-search
      style="max-width: 480px; margin-bottom: 30px"
      v-model:value="searchValue"
      placeholder="输入用户名搜索"
      enter-button="搜索"
      size="large"
      @search="onSearch"
    />
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'avatarUrl'">
          <a-image :src="record.avatarUrl" :width="120" />
        </template>
        <template v-else-if="column.dataIndex === 'userRole'">
          <div v-if="record.userRole === 1">
            <a-tag color="green">管理员</a-tag>
          </div>
          <div v-else>
            <a-tag color="blue">普通用户</a-tag>
          </div>
        </template>
        <template v-if="column.dataIndex === 'createTime'">
          {{ dayjs(record.createTime).format("YYYY-MM-DD HH:mm:ss") }}
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button danger @click="doDelete(record.id)">删除</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { deleteUser, getUserList } from "@/api/user";
import { ref } from "vue";
import { message } from "ant-design-vue";
import dayjs from "dayjs";

const searchValue = ref();
//获取数据
const onSearch = () => {
  fetchData(searchValue.value);
};

//删除用户
const doDelete = async (id: string) => {
  const res = await deleteUser(id);
  if (res.data.code === 0) {
    message.success("删除成功");
    await fetchData();
  } else {
    message.error("删除失败");
  }
};
const columns = [
  {
    title: "id",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "账号",
    dataIndex: "userAccount",
  },
  {
    title: "头像",
    dataIndex: "avatarUrl",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
];

//数据
const data = ref([]);

const fetchData = async (username = "") => {
  const res = await getUserList(username);
  if (res.data.date) {
    data.value = res.data.date || [];
  } else {
    message.error("获取数据失败");
  }
};
</script>
