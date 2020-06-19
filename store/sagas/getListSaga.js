import { call, takeLatest, put } from 'redux-saga/effects';
import { makeApiCall } from './api';
import { API_SECRET } from 'utils';
import { GET_BALANCES_LIST } from '../constants';
import { getBalancesListError, getBalancesListSuccess } from '../actions';

function* getData() {
  try {
    const paramsObj = { method: 'GET', url: GET_BALANCES_LIST, API_SECRET };
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
