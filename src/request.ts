import axios from "axios";

const myAxios = axios.create({
  //区分开发环境与线上环境
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/users"
      : "线上地址", // 设置基础URL
  timeout: 10000, // 设置请求超时时间
  withCredentials: true, // 允许携带cookie
});

// 添加请求拦截器
myAxios.interceptors.request.use(
  function (config) {
    // 请求发送前的操作
    return config;
  },
  function (error) {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 添加响应拦截器
myAxios.interceptors.response.use(
  function (response) {
    // 2xx状态码触发此函数
    // 处理响应数据
    console.log(response);

    const { data } = response;
    console.log(data);
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息接口，或者不是登录页面，则跳转到登录页面
      if (
        !response.request.responseURL.includes("user/current") &&
        !window.location.pathname.includes("/user/login")
      ) {
        window.location.href = `/user/login?redirect=${window.location.href}`;
      }
    }
    return response;
  },
  function (error) {
    // 非2xx状态码触发此函数
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default myAxios;
