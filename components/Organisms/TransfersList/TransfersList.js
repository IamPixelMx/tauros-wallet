import React from 'react';

import { Button, Card, CardSubtitle, CardTitle, TransferHistoryItem } from 'components';

const Balance = () => {
  return (
    <Card hasPadding={false}>
      <Card size='item'>
        <CardTitle textAlign='left' isBold>
          Últimas transacciones
        </CardTitle>
        <CardSubtitle textAlign='right'>Ver completo</CardSubtitle>
      </Card>
      <TransferHistoryItem transaction='PAYPAL WALMART' amount='477' info='9 noviembre 08:20' />
    </Card>
  );
};

export default Balance;
