const getParamsDataObj = data => {
  const dataToString = new URLSearchParams(data).toString();
  const body = JSON.stringify(data);

  return { dataToString, body };
};

export default getParamsDataObj;
