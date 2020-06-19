import React from 'react';
import PropTypes from 'prop-types';
import { CardStyled } from './styles';

const Card = ({ children, size, hasPadding }) => (
  <CardStyled size={size} hasPadding={hasPadding}>
    {children}
  </CardStyled>
);

Card.defaultProps = {
  children: '',
  hasPadding: true,
  size: 'large',
};

Card.propTypes = {
  children: PropTypes.node,
  hasPadding: PropTypes.bool,
  size: PropTypes.string,
};

export default Card;
