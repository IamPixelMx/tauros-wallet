import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styles';

const Button = ({ children, color, disabled, onClick, textTransform }) => (
  <ButtonStyled color={color} disabled={disabled} onClick={onClick} textTransform={textTransform}>
    {children}
  </ButtonStyled>
);

Button.defaultProps = {
  children: 'Submit',
  color: 'black',
  disabled: false,
  onClick: () => {},
  textTransform: 'none',
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  textTransform: PropTypes.string,
};

export default Button;
