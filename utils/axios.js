import axios from 'axios';

export const API_BASE_URL =
  process.env.API_URL || 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json ';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
