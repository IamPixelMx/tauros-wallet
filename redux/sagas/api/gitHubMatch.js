const axios = require('axios');

import Router from 'next/router';

import { SEARCH_BASE_URL, USERS_BASE_URL } from '../../../utils/constants/ApiTypes';

const API_KEY = process.env.API_KEY || 0;
const headers = { Authorization: `Token ${API_KEY}` };

const handleError = response => {
  if (response.statusText === 'OK') return response;
  switch (response.status) {
    case 404:
      throw Object.create({
        error: 'No se encontraron coincidencias para la búsqueda',
      });
    case 403:
      Router.push('/403');
      break;
    case 401:
      Router.push('/401');
      break;
    case 500:
      Router.push('/500');
      break;
  }
  return response;
};

const axiosWithErrorHandling = async url => {
  try {
    const response = await axios.get(url, {
      headers,
    });
    const handleResponse = handleError(response);
    return handleResponse;
  } catch (error) {
    console.error(error);
    return { error: true };
  }
};

const GitHubMatch = {
  byUser: async params => {
    const { usersSearchValue, currentPage, usersPerPage } = params;

    const response = await axiosWithErrorHandling(
      `${SEARCH_BASE_URL}/users?q=${usersSearchValue}&page=${currentPage}&per_page=${usersPerPage}`,
    );
    return response;
  },

  getUser: async searchValue => {
    const response = await axiosWithErrorHandling(`${USERS_BASE_URL}/${searchValue}`);
    return response.data;
  },

  byRepo: async params => {
    const { reposSearchValue, currentPage, reposPerPage } = params;

    const response = await axiosWithErrorHandling(
      `${SEARCH_BASE_URL}/repositories?q=${reposSearchValue}&page=${currentPage}&per_page=${reposPerPage}`,
    );

    return response;
  },
};

export default GitHubMatch;
