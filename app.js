/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-29 16:16:40 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-29 13:33:30
 */
const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const koaBodyparser = require('koa-bodyparser')
const router = require('./server/routers/index.js');
const config = require('./config.js');

const app = new Koa();

app.use(koaBodyparser());
app.use(static(path.join(__dirname , config.staticDirectory)));
// 因中间件中需要解析body中的参数，故先添加该中间件
app.use(router.routes() , router.allowedMethods());

app.listen(config.port , () => {
    console.log(`Koa Server start , Listening in ${config.port}`);
});
