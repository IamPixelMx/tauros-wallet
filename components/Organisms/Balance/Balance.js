import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getBalancesList } from '../../../store/selectors';

import { Button, Card, CardSubtitle, CardTitle, TradingHistoryItem } from 'components';

const Balance = () => {
  const balancesList = useSelector(getBalancesList);

  return (
    <Card hasPadding={false}>
      <Card size='item'>
        <CardTitle textAlign='left' isBold>
          Wallets
        </CardTitle>
      </Card>
      <TradingHistoryItem coin='btc' icon='BtcIcon' balance={55} />
      {/* {balancesList.map(item => <TradingHistoryItem coin={item.coin_name} icon={`${item.coin}Icon`} balance={item.balances.available} />) }*/}
    </Card>
  );
};

export default Balance;
