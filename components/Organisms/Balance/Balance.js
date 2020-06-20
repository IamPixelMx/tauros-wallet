import React from 'react';
import { useSelector } from 'react-redux';
import { getBalancesList, getState } from 'store/selectors';

import { Button, Card, CardSubtitle, CardTitle, Loader, TradingHistoryItem } from 'components';

const Balance = () => {
  const state = useSelector(getState);
  const balancesList = useSelector(getBalancesList);

  console.log('=================BALANCES LIST===================');
  console.log(balancesList);
  console.log('===================STATE=================');
  console.log(state);
  console.log('====================================');

  return (
    <Card hasPadding={false}>
      <Card size='item'>
        <CardTitle textAlign='left' isBold>
          Wallets
        </CardTitle>
      </Card>
      {balancesList === null ? (
        <Loader />
      ) : (
        balancesList.map(({ coin_name, coin_icon, min_withdraw }) => (
          <TradingHistoryItem coin={coin_name} icon={coin_icon} balance={min_withdraw} />
        ))
      )}
    </Card>
  );
};

export default Balance;
