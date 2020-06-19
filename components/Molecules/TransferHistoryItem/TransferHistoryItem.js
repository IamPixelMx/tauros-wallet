import React from 'react';
import PropTypes from 'prop-types';
import { UpIcon, Card, CardTitle, CardSubtitle } from 'components';
import * as Icons from 'components/Atoms/Icons';

const IconSize = {
  width: '.5rem',
  height: '.5rem',
};

const TransferHistoryItem = ({ transaction, amount, info }) => (
  <Card size='item'>
    <UpIcon {...IconSize} />
    <CardTitle textAlign='left' isBold>
      {transaction}
    </CardTitle>
    {info}
    <CardSubtitle textAlign='right' isBold>
      {amount}
    </CardSubtitle>
    {/* {getCurrency(balance, coin)} */}
  </Card>
);

TransferHistoryItem.defaultProps = {
  amount: 0,
  info: '',
  transaction: '',
};

TransferHistoryItem.propTypes = {
  amount: PropTypes.number,
  info: PropTypes.string,
  transaction: PropTypes.string,
};

export default TransferHistoryItem;
