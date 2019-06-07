var request = require('request');

request('http://www.baidu.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the baidu homepage.
  }
})

//get方式请求
var url = 'https://www.sojson.com/open/api/weather/json.shtml?city=北京';
request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // 请求成功的处理逻辑
    }
});

//post方式请求
var url = 'https://www.sojson.com/open/api/weather/json.shtml';
var requestData = {
    city: '北京'
};
request({
    url: url,
    method: 'post',
    json: true,
    headers: {
        'content-type': 'application/json',
    },
    body: JSON.stringify(requestData)
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // 请求成功的处理逻辑
    }
});

//post form方式请求
var url = 'https://www.sojson.com/open/api/weather/json.shtml';
request.post({
    url: url,
    form: {
        city: '北京'
    }
}, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);// 请求成功的处理逻辑
    }
});