/**
 * @description 统一响应请求中间件
 * @param 
 * @error status 响应错误返回的错误码
 * @error msg 自定义的错误提示信息 
 * @success msg 自定义的返回提示信息
 * 
 */

export default async (ctx, next) => {
  ctx.error = ({ status, msg }) => {
    ctx.status = status || 400;
    ctx.body = { code: 'error', msg };
  }
  ctx.success = ({ msg, data }) => {
    ctx.body = { code: 'success', msg, data };
  }
  await next();
};
