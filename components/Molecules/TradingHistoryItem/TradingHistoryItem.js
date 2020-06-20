import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardSubtitle } from 'components';
import { IconStyled } from './styles';

const IconSize = {
  width: '48',
  height: '48',
};

const getIcon = icon => {
  const CoinIcon = Icons[icon];
  return <CoinIcon {...IconSize} />;
};

const TradingHistoryItem = ({ icon, coin, balance }) => (
  <Card size='item'>
    <IconStyled>
      <img src={icon} {...IconSize} />
    </IconStyled>
    <CardTitle textAlign='left' isBold>
      {balance + '' + coin}
    </CardTitle>
    <CardSubtitle textAlign='right'>{balance}</CardSubtitle>
  </Card>
);

TradingHistoryItem.defaultProps = {
  coin: 'MXN',
  balance: '0',
  icon: '',
};

TradingHistoryItem.propTypes = {
  coin: PropTypes.string,
  balance: PropTypes.string,
  icon: PropTypes.string,
};

export default TradingHistoryItem;
