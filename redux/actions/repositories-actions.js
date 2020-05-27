import {
  GET_REPOS_MATCH,
  GET_REPOS_MATCH_SUCCESS,
  GET_REPOS_MATCH_FAIL,
  CLEAN_REPOS_MATCH,
  SET_REPOS_PAGINATION,
} from '../../utils/constants/ActionTypes';

export const getReposMatch = (payload = {}) => ({
  type: GET_REPOS_MATCH,
  payload,
});

export const getReposMatchSuccess = payload => ({
  type: GET_REPOS_MATCH_SUCCESS,
  payload,
});

export const getReposMatchFail = payload => ({
  type: GET_REPOS_MATCH_FAIL,
  payload,
});

export const setReposPagination = payload => ({
  type: SET_REPOS_PAGINATION,
  payload,
});

export const cleanReposMatch = () => ({
  type: CLEAN_REPOS_MATCH,
});
