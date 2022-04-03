const axios = require('axios');
module.exports = async (req, res) => {
  // const { target } = req.query;
  // delete req.query.target;
  // const host = 'https://8.140.36.65:5008';
  // console.log(host + target, req.method, req.body);
  // const result = await axios(host + target, { method: req.method, data: req.body || {}, params: req.query, headers: req.headers});
  // const result = await Promise.all([
  //   axios('https://www.baidu.com'),
  //   axios('https://wangtaotao.top/test/get'),
  //   axios('https://wangtaotao.top:5008/test/get'),
  //   axios('http://8.140.36.65:5006/test/get')
  // ]);
  // console.log(result);
  res.status(200).json({msg: 'ok'});
  // res.status(result.status);
  // res.json(result.data);
};