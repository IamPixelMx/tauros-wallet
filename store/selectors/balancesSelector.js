import { createSelector } from 'reselect';

const stateSelector = state => state;
export const getState = createSelector([stateSelector], state => state);

const balancesListSelector = state => state.balances.balancesList;
export const getBalancesList = createSelector([balancesListSelector], list => list);
