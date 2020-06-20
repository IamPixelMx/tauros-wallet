// import crypto from 'crypto';
import { axiosWithHandleError } from 'utils';

// const getParamsDataObj = data => {
//   const dataToString = new URLSearchParams(data).toString();
//   const body = JSON.stringify(data);

//   return { dataToString, body };
// };

// const getNonce = () => {
//   // create unique nonce
//   const prevNonce = Date.now() / 1000;
//   const nonce = prevNonce.toString().replace('.', '');
//   return nonce;
// };

// const getParamsHeaders = ({ method, url, API_SECRET, data }) => {
//   const nonce = getNonce();
//   const paramsDataObj = data ? getParamsDataObj : { dataToString: null, body: null };
//   const { dataToString, body } = paramsDataObj;

//   // concatenate message
//   const prevMessage = nonce + method.toUpperCase() + url;
//   const afterMessage = dataToString && prevMessage + dataToString;
//   let message = afterMessage ? afterMessage : prevMessage;

//   let api_sha256 = crypto.createHash('sha256').update(message).digest();

//   // create a sha512 hmac with the secret
//   let hmac = crypto.createHmac('sha512', Buffer.from(API_SECRET, 'base64'));

//   let signature = hmac.update(api_sha256).digest('base64');

//   return body ? { nonce, signature, method, url, body } : { nonce, signature, method, url };
// };

// const makeApiCall = async params => {
//   const paramsHeaders = getParamsHeaders(params);
//   const axios = axiosWithHandleError(paramsHeaders);
//   const response = await axios();
//   const data = await response.data;
//   const payload = await data.payload;
//   console.log('==============PAYLOAD AXIOS IN MAKE API CALL=====================');
//   console.log(payload);
//   console.log('====================================');
//   return payload;
// };

export const makeApiCall = async () => {
  const response = axiosWithHandleError();
  const { data } = response;
  // const MelpData = JSON.parse(data);

  return data;
};

// export default makeApiCall;
