import React from 'react';
import PropTypes from 'prop-types';
import { CardSubtitleStyled } from './styles';

const CardSubtitle = ({ children, textAlign, textTransform, isBold }) => (
  <CardSubtitleStyled textAlign={textAlign} textTransform={textTransform} isBold={isBold}>
    {children}
  </CardSubtitleStyled>
);

CardSubtitle.defaultProps = {
  children: '',
  isBold: false,
  textAlign: 'right',
  textTransform: 'none',
};

CardSubtitle.propTypes = {
  children: PropTypes.node,
  isBold: PropTypes.bool,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
};

export default CardSubtitle;
