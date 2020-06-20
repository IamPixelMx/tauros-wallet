import axios from 'axios';
import { API_BASE_URL, API_KEY } from 'utils';

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

const axiosWithHandleError = ({ nonce, signature, method, url, body }) => {
  const headers = createHeaders(nonce, signature);
  // make an Axios instance

  const paramsInstance = body
    ? { baseURL: API_BASE_URL, url, headers, method, body }
    : { baseURL: API_BASE_URL, url, headers, method };

  const axiosInstance = axios.create(paramsInstance);

  axiosInstance.interceptors.response.use(
    // Do something with response data
    res => {
      return res;
    },
    // Do something with response error
    err => {
      console.log(err);
      const responseError = new Error(err.message);
      console.log('responseError', responseError);
      return responseError;
    },
  );
  return axiosInstance;
};

export default axiosWithHandleError;
