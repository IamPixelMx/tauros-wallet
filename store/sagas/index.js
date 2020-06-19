import { all } from 'redux-saga/effects';
//sagas
import getListSaga from './getListSaga';

function* rootSaga() {
  yield all([getListSaga()]);
}

export default rootSaga;
