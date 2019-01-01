//服务器向服务器发送   put   请求  更新数据
const http = require('http');
const querystring = require('querystring');
let postObj = {
    id:'57' ,
    name:'活着',
    author:'余华',
    category:'文学、艺术',
    description:'只要活着！活着就有希望！！！'
  }
const postData = querystring.stringify(postObj);
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/books/book/',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
};

const req = http.request(options, (res) => {
 
  res.setEncoding('utf8');
  let info = '';
  res.on('data', (chunk) => {
    info += chunk;
  });
  res.on('end', () => {
    console.log(info);
  });
});

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

// 将数据写入到请求主体。
req.write(postData);
req.end();