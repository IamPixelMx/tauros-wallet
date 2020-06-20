import styled from '@emotion/styled';
import { css } from '@emotion/core';

const modalOpen = ({ isOpen }) =>
  isOpen &&
  css`
    display: flex;
    opacity: 1;
    pointer-events: auto;
    transition: opacity 300ms ease-in-out;
  `;

export const labelsBase = ({ textAlign, textTransform }) =>
  css`
    color: var(--black-two);
    text-align: ${textAlign};
    text-transform: ${textTransform};
    margin-top: 0;
    margin-bottom: 0;
    & + h2,
    & + h3,
    & + p {
      margin-top: var(--spacing-xs);
    }
    & + div {
      margin-top: var(--spacing-l);
    }
  `;

export const ModalTitleStyled = styled.h2`
  ${labelsBase};
  font-size: var(--font-size-m);
  font-weight: var(--medium-font);
  line-height: var(--font-size-xl);
`;

const modalOverwriteStyles = () =>
  css`
    ${ModalTitleStyled} {
      text-align: center;
    }
  `;

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: var(--black-76);
  z-index: 200;
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms ease-in-out;
  ${modalOpen};
  ${modalOverwriteStyles};
`;

export const ModalCardStyled = styled.div`
  position: relative;
  height: 370px;
  width: 300px;
  max-height: calc(100vh - 150px);
  max-width: calc(528px - (2 * var(--spacing-l)));
  padding: var(--spacing-l);
  border-radius: var(--border-radius-standard);
  background-color: var(--white);
`;

export const ModalCloseIconStyled = styled.div`
  position: absolute;
  top: var(--spacing-m);
  right: 0;
  height: 42px;
  width: 44px;
  fill: var(--steel-66);
  z-index: 201;
  cursor: pointer;
  &:hover {
    fill: var(--black-two);
  }
`;
