import {
  GET_BALANCES_LIST,
  GET_BALANCES_LIST_ERROR,
  GET_BALANCES_LIST_SUCCESS,
} from '../constants';

export const getBalancesList = () => ({
  type: GET_BALANCES_LIST,
});

export const getBalancesListError = payload => ({
  type: GET_BALANCES_LIST_ERROR,
  payload,
});

export const getBalancesListSuccess = payload => ({
  type: GET_BALANCES_LIST_SUCCESS,
  payload,
});
