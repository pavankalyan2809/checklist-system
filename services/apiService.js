const axios = require('axios');

const fetchApplicationData = async () => {
  const API_URL =
    'http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639';
  const response = await axios.get(API_URL);
  return response.data;
};

module.exports = { fetchApplicationData };
