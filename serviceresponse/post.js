//服务器向服务器发送post请求
  const http = require('http');
  const querystring = require('querystring');
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/books/book',
    method: 'POST',
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
  const postData = querystring.stringify({
    name:'活着',
    author:'余华',
    category:'文学',
    description:'只要活着！活着就有希望！！！'
  });
  // 将数据写入到请求主体。
  req.write(postData);
  req.end();