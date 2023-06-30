// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

// const permissionRouter = {
//   path: "/permission",
//   meta: {
//     title: "menus.permission",
//     icon: "lollipop",
//     rank: 10
//   }
// };

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: []
      };
    }
  }
] as MockMethod[];
