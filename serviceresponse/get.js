//服务器向服务器请求数据
const http = require('http');
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/books',
    method: 'GET'
  };
  
  const req = http.request(options, (res) => {
    //console.log(`状态码: ${res.statusCode}`);
    //console.log(`响应头: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    let info ="";
    res.on('data', (chunk) => {
        info += chunk;
      //console.log(`响应主体: ${chunk}`);
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