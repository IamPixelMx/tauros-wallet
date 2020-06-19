import React from 'react';
import PropTypes from 'prop-types';
import { ModalTitleStyled } from './styles';

const ModalTitle = ({ children, textAlign, textTransform }) => (
  <ModalTitleStyled textAlign={textAlign} textTransform={textTransform}>
    {children}
  </ModalTitleStyled>
);

ModalTitle.defaultProps = {
  children: '',
  textAlign: 'center',
  textTransform: 'none',
};

ModalTitle.propTypes = {
  children: PropTypes.node,
  textAlign: PropTypes.string,
  textTransform: PropTypes.string,
};

export default ModalTitle;
