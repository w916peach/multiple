const axios = require('axios');
module.exports = async (req, res) => {
  const { target } = req.query;
  delete req.query.target;
  const host = 'https://8.140.36.65:5008';
  const result = await axios(host + target, {method: req.method, data: req.body, params: req.query, headers: req.headers});
  res.status(result.status);
  res.json(result.data);
};