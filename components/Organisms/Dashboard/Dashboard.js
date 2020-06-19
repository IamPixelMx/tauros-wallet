import React, { useState } from 'react';

import { Balance, Trading, TransfersList } from 'components';
import { DashboardContentStyled, DashboardSplitCardsStyled } from './styles';

const Dashboard = () => {
  return (
    <React.Fragment>
      {/* <Button onClick={() => setIsModalOpen(true)}>Checar balance</Button> */}
      <DashboardSplitCardsStyled>
        <Balance />
        <Trading />
        <TransfersList />
      </DashboardSplitCardsStyled>
    </React.Fragment>
  );
};

export default Dashboard;
