//服务器向服务器请求数据
const http = require('http');
let cityCode = 101010100;
  const options = {
    hostname: 'www.weather.com.cn',
    port: 80,
    path: '/data/sk/'+cityCode+'.html',
    method: 'GET'
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
 
  //结束请求
  req.end();