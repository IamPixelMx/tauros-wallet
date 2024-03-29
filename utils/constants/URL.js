export const API_BASE_URL = process.env.API_URL || 'http://localhost:3000/__mocks__';

export const BALANCE_URL = '/api/data/getbalance';
export const LIST_BALANCES_URL = process.env.LIST_BALANCES_URL || '/api/v1/data/listbalances';
export const LIST_TRANSFERS_URL = '/api/v2/wallets/transfershistory';
