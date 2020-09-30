

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { sign } = require('jsonwebtoken');
const { secret } = require('./config');
const jwt = require('koa-jwt')({secret});


const app = new Koa();
const router = new Router();
 
router.get("/api/login",async(ctx,next) => {
    ctx.body = {
        code:200,
        msg:'hello',
        success:true
    }
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(8082,() => {
    console.log('app listen 8082');

})