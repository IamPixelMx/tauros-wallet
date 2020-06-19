import { combineReducers } from 'redux';

import balancesReducer from './balancesReducer';

const rootReducer = combineReducers({
  balances: balancesReducer,
});

export default rootReducer;
