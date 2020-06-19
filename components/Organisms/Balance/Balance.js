import React, { useState } from 'react';

import { Button, Card, CardSubtitle, CardTitle, TradingHistoryItem } from 'components';

const Balance = () => {
  return (
    <Card hasPadding={false}>
      <Card size='item'>
        <CardTitle textAlign='left' isBold>
          Wallets
        </CardTitle>
      </Card>
      <TradingHistoryItem coin='btc' icon='BtcIcon' balance={55} />
    </Card>
  );
};

export default Balance;
