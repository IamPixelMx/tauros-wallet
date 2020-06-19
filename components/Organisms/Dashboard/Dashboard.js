import React, { useState } from 'react';

import { Balance, Trading, TransfersList } from 'components';
import { DashboardSplitCardsStyled } from './styles';

const Dashboard = () => {
  return (
    <React.Fragment>
      <DashboardSplitCardsStyled>
        <Balance />
        <Trading />
        <TransfersList />
      </DashboardSplitCardsStyled>
    </React.Fragment>
  );
};

export default Dashboard;
