import React from 'react';
import PropTypes from 'prop-types';
import { BtcIcon, Card, CardTitle, CardSubtitle } from 'components';
import * as Icons from 'components/Atoms/Icons';

const IconSize = {
  width: '2rem',
  height: '2rem',
};

const getIcon = icon => {
  const CoinIcon = Icons[icon];
  return <CoinIcon {...IconSize} />;
};

const TradingHistoryItem = ({ icon, coin, balance }) => (
  <Card size='item'>
    {/* {getIcon(icon)} */}
    <BtcIcon {...IconSize} />
    <CardTitle textAlign='left' isBold>
      {coin}
    </CardTitle>
    <CardSubtitle textAlign='right'>{balance}</CardSubtitle>
  </Card>
);

TradingHistoryItem.defaultProps = {
  coin: '',
  balance: 0,
  icon: '',
};

TradingHistoryItem.propTypes = {
  coin: PropTypes.string,
  balance: PropTypes.number,
  icon: PropTypes.string,
};

export default TradingHistoryItem;
