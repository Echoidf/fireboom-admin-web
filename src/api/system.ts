import { http } from "@/utils/http";

export type Perm = {
  createdAt: string;
  enabled: number;
  method: string;
  path: string;
};

export type PermSyncReq = {
  data: Perm[];
};
export const sendPermission = (data?: PermSyncReq) => {
  return http.request("post", "/operations/System/Perm/CreateMany", { data });
};

export const getSubmenu = (data: number) => {
  return http.request(
    "get",
    `/operations/System/Menu/GetChildrenMenus?pid=${data}`
  );
};

export const getPerm = (data: number) => {
  return http.request(
    "get",
    `/operations/System/Menu/GetMenuPerms?menuId=${data}`
  );
};

export const getPagePerm = (data: number) => {
  return http.request("get", `/operations/System/Perm/GetMany?menuId=${data}`);
};

export const getMenuRoles = (data: string) => {
  return http.request(
    "get",
    `/operations/System/Role/GetMenuRoles?title=${data}`
  );
};

// 获取动态路由api
export const getDynamicRoute = () => {
  return http.request("get", `/operations/System/GetMenus`);
};
