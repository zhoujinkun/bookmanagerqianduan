//服务器向服务器  删除  数据
const http = require('http');
const id ='52';
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/books/book/'+id,
    method: 'DELETE'
  };
  
  const req = http.request(options, (res) => {
    res.setEncoding('utf8');
    let info ="";
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
 
  req.end();