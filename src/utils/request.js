// 把params对象解析成参数字符串的形式 key1=value1&key2=value2
const qsStringify = (params) => {
  const arr = [];
  for (const key in params) {
    arr.push(key + '=' + params[key]);
  }
  return arr.join('&');
};

// 封装一个浏览器向服务器发送请求的方法
const request = ({ url, method = 'GET', params = {}, headers = {}, data = {} }) => {
  return new Promise((resolve, reject) => {
    if (method === "GET") {
      data = null;
    }
    
    if (process.env.NODE_ENV === 'development') {
      const paramsStr = qsStringify(params);
      url = url + (paramsStr ? '?' : '') + paramsStr;
    } else {
      params.target = window.encodeURIComponent(url);
      const paramsStr = qsStringify(params);
      url = `/api/proxy?${paramsStr}`;
    }

    
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true); //true表示异步请求  建立连接

    // 设置请求头
    const assinHeaders = {
      "Content-Type": "application/json;charset=urf-8",
      "Authorization": JSON.parse(localStorage.getItem("loginInfor"))?.token,
      ...headers
    };

    for (let header in assinHeaders) {
      xhr.setRequestHeader(header, assinHeaders[header]);
    }

    xhr.send(data ? JSON.stringify(data) : data); //发送请求

    xhr.onreadystatechange = () => {
      // 服务器响应成功之后
      if (xhr.readyState === 4) {
        if (xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else if (xhr.status === 401) { //返回401，就重定向到login登录页
          window.location.href = "/login";
        } else {
          reject(xhr);
        }
      }
    };
  });
};
export default request;

/*
    浏览器向服务器发送参数有三种方式
        1. 通过地址栏 ： get 和 post都可以   params
        2. 通过请求头 ： get 和 post都可以 headers
        3. 通过请求体 ： 只有post可以  data必须是json数据

*/
