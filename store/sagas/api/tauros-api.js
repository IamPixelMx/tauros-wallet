import crypto from 'crypto';
import { axiosWithHandleError } from 'utils';

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
  // const prevMessage = nonce + method.toUpperCase() + url;
  // const afterMessage = dataToString && prevMessage + dataToString;
  // let message = afterMessage ? afterMessage : prevMessage;
  let message =
    dataToString !== null
      ? nonce + method.toUpperCase() + url + dataToString
      : nonce + method.toUpperCase() + url;
  let api_sha256 = crypto.createHash('sha256').update(message).digest();
  // create a sha512 hmac with the secret
  let hmac = crypto.createHmac('sha512', Buffer.from(API_SECRET, 'base64'));

  const signature = hmac.update(api_sha256).digest('base64');
  return { nonce, signature, method, url, body };
};

const makeApiCall = async params => {
  const paramsHeaders = getParamsHeaders(params);
  const axios = await axiosWithHandleError(paramsHeaders);
  console.log('==============AXIOS=====================');
  console.log(axios);
  console.log('====================================');
  const response = await axios();
  console.log('==============RESPONSE=====================');
  console.log(response);
  console.log('====================================');
  const { data } = response;
  const res = data && response;
  return res;
};

export default makeApiCall;
