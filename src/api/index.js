const axios = require('axios');

const getData = async () => {
  const apiConfig = {
    timeout: 30000,
    baseURL: 'http://localhost:3003/api/people',
    rejectUnauthorized: false,
    strictSSL: false,
  };

  const apiRequest = axios.create(apiConfig);

  const { data } = await apiRequest.get();

  return data;
};

export default getData;
