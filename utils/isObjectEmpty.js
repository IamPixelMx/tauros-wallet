export const isObjectEmpty = obj => {
  const keys = Object.keys(obj);
  return keys.length === 0;
};
