import axios from 'axios';
const fetch = require('node-fetch');

// API variables from .env
const API_BASE_URL = process.env.API_URL || 'https://staging.api.tauros.io';
const API_KEY = process.env.API_KEY;

// create headers
const createHeaders = (nonce, signature) => {
  const headers = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    'Taur-Nonce': nonce,
    'Taur-Signature': signature,
  };
  return headers;
};

const axiosWithHandleError = ({ nonce, signature, method, url }) => {
  const headers = createHeaders(nonce, signature);
  // make an Axios instance

  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    url,
    headers,
    method,
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
  return axiosInstance;
};

export const requestWithHandleError = async ({ nonce, signature, method, url }) => {
  console.log('entro a requestWithHandleError');

  const headers = createHeaders(nonce, signature);

  const request = {
    method: method,
    headers: headers,
  };

  try {
    const res = await fetch(API_BASE_URL + url, request);
    console.log('response from requestWithHandleError: ', res);
    const response = res.ok ? res.json() : { status_code: res.status, message: res.statusText };
    return response;
  } catch (error) {
    console.log('error message from requestWithHandleError: ', error.message);
  }
};

export default axiosWithHandleError;
