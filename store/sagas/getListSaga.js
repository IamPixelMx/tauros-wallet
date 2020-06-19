import { call, takeLatest, put } from 'redux-saga/effects';
import { makeApiCall } from './api';
import { API_SECRET, LIST_BALANCES_URL } from 'utils';
import { GET_BALANCES_LIST } from '../constants';
import { getBalancesListError, getBalancesListSuccess } from '../actions';

function* getData() {
  try {
    const paramsObj = { method: 'GET', url: LIST_BALANCES_URL, API_SECRET };
    const request = yield call(makeApiCall, paramsObj);
    yield put(getBalancesListSuccess(request));
  } catch (error) {
    console.error(error);
    yield put(getBalancesListError(error));
  }
}

function* getListSagas() {
  yield takeLatest(GET_BALANCES_LIST, getData);
}

export default getListSagas;
