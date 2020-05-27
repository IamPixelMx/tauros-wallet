import {
  GET_USERS_MATCH,
  GET_USERS_MATCH_SUCCESS,
  GET_USERS_MATCH_FAIL,
  CLEAN_USERS_MATCH,
  SET_USERS_PAGINATION,
} from '../../utils/constants/ActionTypes';

export const getUsersMatch = (payload = {}) => ({
  type: GET_USERS_MATCH,
  payload,
});

export const getUsersMatchSuccess = payload => ({
  type: GET_USERS_MATCH_SUCCESS,
  payload,
});

export const getUsersMatchFail = payload => ({
  type: GET_USERS_MATCH_FAIL,
  payload,
});

export const setUsersPagination = payload => ({
  type: SET_USERS_PAGINATION,
  payload,
});

export const cleanUsersMatch = () => ({
  type: CLEAN_USERS_MATCH,
});
