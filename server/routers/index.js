/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-29 17:44:57 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-01 15:17:14
 */

const Router = require('koa-router');
const fs = require('fs');
const proxy = require('http-proxy-middleware');

let router = new Router();

router.get('/*' , async (ctx , next)=> {
    if(ctx.url.startsWith('/restapi') || ctx.url.startsWith('/pizza')) {
      ctx.respond = false;
      return await proxy({
          target: 'https://h5.ele.me:443', // 服务器地址
          changeOrigin: true,
          secure: false,
          // pathRewrite: {
          //     '^/v1' : '/mobile/v1'
          // }
      })(ctx.req, ctx.res, next)
   }
})

module.exports = router;