import { apiCall as axios } from 'utils';

export const getMelpData = async () => {
  const response = await axios.get('/data-melp.json');
  const { data } = response;
  // const MelpData = JSON.parse(data);

  return data;
};
