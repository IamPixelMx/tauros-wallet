// import crypto from 'crypto';
const crypto = require('crypto');
import { axiosWithHandleError, getParamsDataObj, getNonce } from 'utils';

const getParamsHeaders = ({ method, url, API_SECRET, data }) => {
  const nonce = getNonce();
  const paramsDataObj = data ? getParamsDataObj(data) : { dataToString: null, body: null };
  const { dataToString, body } = paramsDataObj;

  // concatenate message
  const prevMessage = nonce + method.toUpperCase() + url;
  const afterMessage = dataToString && prevMessage + dataToString;
  let message = afterMessage ? afterMessage : prevMessage;

  let api_sha256 = crypto.createHash('sha256').update(message).digest();

  // create a sha512 hmac with the secret
  let hmac = crypto.createHmac('sha512', Buffer.from(API_SECRET, 'base64'));

  let signature = hmac.update(api_sha256).digest('base64');

  return body ? { nonce, signature, method, url, body } : { nonce, signature, method, url };
};

export const makeApiCall = async params => {
  const paramsHeaders = getParamsHeaders(params);
  const axios = axiosWithHandleError(paramsHeaders);
  const response = await axios();
  const data = await response.data;
  console.log('====DATA AXIOS IN MAKE API CALL======');
  console.log(data);
  console.log('====================================');
  const payload = await data.payload;
  console.log('====PAYLOAD AXIOS IN MAKE API CALL=====');
  console.log(payload);
  console.log('====================================');
  return payload;
};

// export const makeApiCall = async () => {
//   const response = axiosWithHandleError();
//   const { data } = response;
//   return data;
// };
