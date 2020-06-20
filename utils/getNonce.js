const getNonce = () => {
  // create unique nonce
  const prevNonce = Date.now() / 1000;
  const nonce = prevNonce.toString().replace('.', '');
  return nonce;
};

export default getNonce;
