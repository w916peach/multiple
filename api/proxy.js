const axios = require("axios");

module.exports = async (req, res) => {
  // 获取body数据
  await new Promise((resolve) => {
    let buf = Buffer.alloc(0);
    req.on("data", (chunk) => {
      buf = Buffer.concat([buf, chunk]);
    });
    req.on("end", () => {
      const index = req.rawHeaders.findIndex(
        (header) => header === "Content-Type"
      );

      const contentType = req.rawHeaders[index + 1];
      const body = buf.toString();
      if (contentType.indexOf("application/json") !== -1) {
        req.body = body ? JSON.parse(body) : {};
      } else if (contentType.indexOf("x-www-form-urlencoded") !== -1) {
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
    res.json(result.data);
  } catch (err) {
    res.status(err.response.status);
    res.json(err.response.data);
  }
};
