import {
  UPDATE_REPOS_LIST,
  UPDATE_REPOS_LIST_SUCCESS,
  UPDATE_REPOS_LIST_FAIL,
} from '../../utils/constants/ActionTypes';

export const updateReposList = (payload = {}) => ({
  type: UPDATE_REPOS_LIST,
  payload,
});

export const updateReposListSuccess = payload => ({
  type: UPDATE_REPOS_LIST_SUCCESS,
  payload,
});

export const updateReposListFail = payload => ({
  type: UPDATE_REPOS_LIST_FAIL,
  payload,
});
