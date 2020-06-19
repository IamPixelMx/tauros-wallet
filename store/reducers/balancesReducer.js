import {
  GET_BALANCES_LIST,
  GET_BALANCES_LIST_ERROR,
  GET_BALANCES_LIST_SUCCESS,
} from '../constants';

import { balances } from '../models';

const INITIAL_STATE = balances;

const balancesReducer = (state = INITIAL_STATE, { type, payload = {} }) => {
  switch (type) {
    case GET_BALANCES_LIST:
      return { ...state, loading: true };

    case GET_BALANCES_LIST_ERROR:
      return { ...state, error: payload, loading: false };

    case GET_BALANCES_LIST_SUCCESS:
      return {
        ...state,
        balancesList: { ...payload },
        loading: false,
        error: '',
      };

    default:
      return state;
  }
};

export default balancesReducer;
