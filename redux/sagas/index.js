import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { GitHubMatch } from './api';

import {
  getUsersMatchSuccess,
  getUsersMatchFail,
  setUsersPagination,
} from '../actions/users-actions';
import {
  getReposMatchSuccess,
  getReposMatchFail,
  setReposPagination,
} from '../actions/repositories-actions';
import { updateUsersListSuccess, updateUsersListFail } from '../actions/users-list-actions';
import { updateReposListSuccess, updateReposListFail } from '../actions/repositories-list-actions';

import {
  GET_USERS_MATCH,
  GET_REPOS_MATCH,
  UPDATE_USERS_LIST,
  UPDATE_REPOS_LIST,
} from '../../utils/constants/ActionTypes';

function* usersMatchArr(action) {
  const { currentPage, usersPerPage } = action.payload;
  try {
    const response = yield call(GitHubMatch.byUser, action.payload);
    const {
      data: { total_count, items },
    } = response;
    const lastPage = Math.ceil(total_count / usersPerPage);
    const pagination = { lastPage, currentPage };

    const arrPromises = items.map(item => call(GitHubMatch.getUser, item.login));
    const usersMatchArr = yield all(arrPromises);

    yield put(getUsersMatchSuccess(usersMatchArr));
    yield put(setUsersPagination({ total_count, pagination }));
  } catch (error) {
    console.log(error);
    yield put(getUsersMatchFail(error.message));
  }
}

function* reposMatchArr(action) {
  const { currentPage, reposPerPage } = action.payload;
  try {
    const response = yield call(GitHubMatch.byRepo, action.payload);
    const {
      data: { total_count, items: reposMatchArr },
    } = response;
    const lastPage = Math.ceil(total_count / reposPerPage);
    const pagination = { lastPage, currentPage };

    yield put(getReposMatchSuccess(reposMatchArr));
    yield put(setReposPagination({ total_count, pagination }));
  } catch (error) {
    console.log(error);
    yield put(getReposMatchFail(error.message));
  }
}

const getUsersList = state => state.usersListReducer.usersList;
const getReposList = state => state.reposListReducer.reposList;

function* updateUsersListArr(action) {
  const { index, item } = action.payload;
  const prev_list = yield select(getUsersList);

  if (index === -1) {
    try {
      const updated_list = prev_list.concat(item);
      yield put(updateUsersListSuccess(updated_list));
    } catch (error) {
      console.log(error);
      yield put(updateUsersListFail(error.message));
    }
  } else {
    try {
      const updated_list = [...prev_list];
      updated_list.splice(index, 1);
      yield put(updateUsersListSuccess(updated_list));
    } catch (error) {
      console.log(error);
      yield put(updateUsersListFail(error.message));
    }
  }
}

function* updateReposListArr(action) {
  const { index, item } = action.payload;
  const prev_list = yield select(getReposList);

  if (index === -1) {
    try {
      const updated_list = prev_list.concat(item);
      yield put(updateReposListSuccess(updated_list));
    } catch (error) {
      console.log(error);
      yield put(updateReposListFail(error.message));
    }
  } else {
    try {
      const updated_list = [...prev_list];
      updated_list.splice(index, 1);
      yield put(updateReposListSuccess(updated_list));
    } catch (error) {
      console.log(error);
      yield put(updateReposListFail(error.message));
    }
  }
}

function* rootSaga() {
  yield all([
    takeLatest(GET_USERS_MATCH, usersMatchArr),
    takeLatest(GET_REPOS_MATCH, reposMatchArr),
    takeLatest(UPDATE_USERS_LIST, updateUsersListArr),
    takeLatest(UPDATE_REPOS_LIST, updateReposListArr),
  ]);
}

export default rootSaga;
