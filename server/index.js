const express= require('express');
const {Nuxt,Builder}= require('nuxt');
const {environment,isDevMode}= require('../environment');
const app=express();
const config=require('../nuxt.config');
const nuxt=new Nuxt(config);
app.use(nuxt.render)
const port=environment.PORT || 3000
const host=environment.HOST || '127.0.0.1'
function listen() {
    app.listen(port, host)
    const envText=isDevMode?'开发环境':'生产环境'
    console.log(`${envText}启动成功! Server listening on ${host}:${port}, at ${new Date().toLocaleString()}`)
  }

if(isDevMode){
  new Builder(nuxt).build().then(listen).catch((error)=>{
    console.error('开发模式启动失败：', error)
    process.exit(1)
  })
}else{
    listen()
}


