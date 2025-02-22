import myAxios from "@/request";
//用户注册
export const userRegister = async (params: any) => {
  // 发送用户注册请求
  return await myAxios.request({
    url: "api/user/register", // 请求的URL
    method: "post", // 请求方法为POST
    data: params, // 请求数据
  });
};

//用户登录
export const userLogin = async (params: any) => {
  // 发送用户登录请求
  return await myAxios.request({
    url: "api/user/login", // 请求的URL
    method: "post", // 请求方法为POST
    data: params, // 请求数据
  });
};

//用户注销
export const userLogout = async (params: any) => {
  // 发送用户注销请求
  return await myAxios.request({
    url: "api/user/logout", // 请求的URL
    method: "post", // 请求方法为POST
  });
};

//获取当前用户
export const getCurrentUser = async () => {
  // 发送获取当前用户请求
  return await myAxios.request({
    url: "api/user/current", // 请求的URL
    method: "get", // 请求方法为GET
  });
};

//获取用户列表
export const getUserList = async (username: any) => {
  // 发送获取用户列表请求
  return await myAxios.request({
    url: "api/user/list", // 请求的URL
    method: "get", // 请求方法为GET
    params: { username },
  });
};

//删除用户
export const deleteUser = async (id: string) => {
  // 发送删除用户请求
  return await myAxios.request({
    url: "api/user/delete", // 请求的URL
    method: "post", // 请求方法为POST
    data: id,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
