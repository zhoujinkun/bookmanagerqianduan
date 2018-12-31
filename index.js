// 文件入口
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
//启动静态资源,此方法是把网页写死的方式，最易懂,但是可以请求样式类文件css等并且文件路径必须带有/www
app.use(express.static('public'));

//处理post json数据
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(router);
app.listen(3000,()=>{
    console.log('app is running');
})