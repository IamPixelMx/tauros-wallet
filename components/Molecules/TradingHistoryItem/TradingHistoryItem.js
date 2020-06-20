import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardSubtitle } from 'components';
import { IconStyled, SplitContentStyled } from './styles';

const IconSize = {
  width: '48',
  height: '48',
};

const TradingHistoryItem = ({ icon, coin, balance }) => {
  const handleBalance = num => {
    return Number.parseFloat(num).toFixed(4);
  };
  const amount = handleBalance(balance);

  return (
    <Card size='item'>
      <SplitContentStyled>
        <IconStyled>
          <img src={icon} {...IconSize} />
        </IconStyled>
        <div>
          <CardTitle textAlign='right' isBold>
            {coin}
          </CardTitle>
          <CardSubtitle textAlign='right'>{amount}</CardSubtitle>
        </div>
      </SplitContentStyled>
    </Card>
  );
};

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
