

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { sign } = require('jsonwebtoken');
const { secret } = require('./config');
const jwt = require('koa-jwt')({secret});


const app = new Koa();
const router = new Router();
 
router.get("/api/login",async(ctx,next) => {
    const user = ctx.request.query;
    const { username } = user;
    if(username) {
        const token = sign({username},secret,{expiresIn:'10h'});
        ctx.body = {
            code:200,
            msg:"成功",
            token:token,
            success:true
        }
    }else {
        ctx.body = {
            code:404,
            msg:"传入参数有误",
            success:false
        }
    }
});
router.get('/api/userInfo',jwt,async(ctx,next) => {
    ctx.body = {
        username:ctx.state.user.username,
        code:200,
    }
});


app.use(router.routes()).use(router.allowedMethods());
app.listen(8082,() => {
    console.log('app listen 8082');

})