const axios = require("axios");

module.exports = async (req, res) => {
  // 整合request headers

  for (let i = 0; i < req.rawHeaders.length; i += 2) {
    req.headers[req.rawHeaders[i]] = req.rawHeaders[i + 1];
  }
  console.log("req.headers", req.headers);
  // 获取body数据
  await new Promise((resolve) => {
    let buf = Buffer.alloc(0);
    req.on("data", (chunk) => {
      buf = Buffer.concat([buf, chunk]);
    });
    req.on("end", () => {
      const contentType = req.headers["Content-Type"];
      console.log("contentType", contentType);
      const body = buf.toString();
      if (contentType.indexOf("application/json") !== -1) {
        req.body = body ? JSON.parse(body) : {};
      } else if (
        contentType.indexOf("application/x-www-form-urlencoded") !== -1
      ) {
        const obj = {};
        body.split("&").forEach((item) => {
          const arr = item.split("=");
          // eslint-disable-next-line prefer-destructuring
          obj[arr[0]] = arr[1];
        });
        req.body = obj;
      }
      resolve();
    });
  });

  const { target } = req.query;
  delete req.query.target;
  try {
    const host = "http://8.140.36.65:5006";
    const result = await axios(host + target, {
      method: req.method,
      data: req.body,
      params: req.query,
      headers: req.headers,
    });
    res.status(result.status);
    res.set(result.headers);
    res.json(result.data);
  } catch (err) {
    if (err.response) {
      res.status(err.response.status);
      res.set(err.response.headers);
      res.send(err.response.data);
    } else {
      res.status(500);
      res.end();
    }
  }
};
