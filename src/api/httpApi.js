import { post } from "./request";

/**
 * 登录接口
 * @param {String} username - 用户名
 * @param {String} password - 密码
 * @returns
 */
export const loginApi = (username, password) =>
  post("http://115.28.136.113:8081/site/login", { username, password });

/**
 * 注册接口
 * @param {String} username - 用户名
 * @param {String} password - 密码
 * @returns
 */
export const registerApi = (username, password) =>
  post("http://115.28.136.113:8081/site/register", { username, password });
