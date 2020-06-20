import React from 'react';
import PropTypes from 'prop-types';
import { CardStyled } from './styles';

const Card = ({ children, size, hasPadding, hasOverflow }) => (
  <CardStyled size={size} hasPadding={hasPadding} hasOverflow={hasOverflow}>
    {children}
  </CardStyled>
);

Card.defaultProps = {
  children: '',
  hasPadding: true,
  hasOverflow: false,
  size: 'large',
};

Card.propTypes = {
  children: PropTypes.node,
  hasPadding: PropTypes.bool,
  hasOverflow: PropTypes.bool,
  size: PropTypes.string,
};

export default Card;
