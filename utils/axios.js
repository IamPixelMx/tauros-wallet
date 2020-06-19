import axios from 'axios';

// API variables from .env
const API_BASE_URL = process.env.API_URL || 'https://staging.api.tauros.io/api';
const API_KEY = process.env.API_KEY;

// create headers
const createHeaders = (nonce, signature) => {
  return {
    Authorization: 'Bearer ' + API_KEY,
    'Content-Type': 'application/json',
    'Taur-Nonce': nonce,
    'Taur-Signature': signature,
  };
};

const axiosWithHandleError = async ({ nonce, signature, method, url, body }) => {
  const headers = createHeaders(nonce, signature);
  // make an Axios instance

  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    url,
    headers,
    method,
    body,
  });

  axiosInstance.interceptors.response.use(
    // Do something with response data
    res => {
      const responseJSON = res.ok
        ? res.json()
        : { status_code: res.status, message: res.statusText };
      console.log('responseJSON: ', responseJSON);
    },
    // Do something with response error
    err => {
      console.log(err);
      const responseError = new Error(err.message);
      console.log('responseError', responseError);
    },
  );

  return await axiosInstance;
};

export default axiosWithHandleError;
