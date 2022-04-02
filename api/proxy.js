const axios = require('axios');
module.exports = async (req, res) => {
  const {target} = req.query;
  const result = await axios(target, {method: req.method, data: req.body, params: req.query, headers: req.headers});
  res.status(result.status);
  res.json(result.data);
};