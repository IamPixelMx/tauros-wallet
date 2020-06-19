import React from 'react';
import PropTypes from 'prop-types';
import { CardTitleStyled } from './styles';

const CardTitle = ({ children, textAlign, textTransform, isBold }) => (
  <CardTitleStyled textAlign={textAlign} textTransform={textTransform} isBold={isBold}>
    {children}
  </CardTitleStyled>
);

CardTitle.defaultProps = {
  children: '',
  isBold: false,
  textAlign: 'center',
  textTransform: 'none',
};

CardTitle.propTypes = {
  children: PropTypes.node,
  isBold: PropTypes.bool,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
};

export default CardTitle;
