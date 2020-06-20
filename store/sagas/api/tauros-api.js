import crypto from 'crypto';
import { axiosWithHandleError, requestWithHandleError } from 'utils';

const getParamsDataObj = data => {
  const dataToString = new URLSearchParams(data).toString();
  const body = JSON.stringify(data);

  return { dataToString, body };
};

const getNonce = () => {
  // create unique nonce
  const prevNonce = Date.now() / 1000;
  const nonce = prevNonce.toString().replace('.', '');
  return nonce;
};

const getParamsHeaders = ({ method, url, API_SECRET, data }) => {
  const nonce = getNonce();
  const paramsDataObj = data ? getParamsDataObj : { dataToString: null, body: null };
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

const makeApiCall = async params => {
  const paramsHeaders = getParamsHeaders(params);
  console.log('=================PARAMS HEADERS===================');
  console.log(paramsHeaders);
  console.log('====================================');
  const axios = axiosWithHandleError(paramsHeaders);
  const request = await requestWithHandleError(paramsHeaders);
  console.log('==============RESPONSE REQUEST=====================');
  console.log(request);
  console.log('====================================');
  const response = await axios();
  console.log('==============RESPONSE AXIOS=====================');
  console.log(response);
  console.log('====================================');
  const { data } = response;
  const res = data && response;
  return res;
};

export default makeApiCall;
