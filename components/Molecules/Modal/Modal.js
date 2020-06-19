import React from 'react';
import PropTypes from 'prop-types';
import { ModalStyled, ModalCardStyled, ModalCloseIconStyled } from './styles';
import { CloseIcon } from 'components';

const Modal = ({ children, isOpen, onModalClose }) => (
  <ModalStyled isOpen={isOpen}>
    <ModalCardStyled>
      <ModalCloseIconStyled>
        <CloseIcon width='20' height='20' onClick={onModalClose} title='CloseModal' />
      </ModalCloseIconStyled>
      {children}
    </ModalCardStyled>
  </ModalStyled>
);

Modal.defaultProps = {
  children: '',
  isOpen: false,
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onModalClose: PropTypes.func,
};

export default Modal;
