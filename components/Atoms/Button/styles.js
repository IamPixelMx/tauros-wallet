import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const blackButtonStyled = ({ color }) =>
  ['primary', 'black'].includes(color.toLowerCase()) &&
  css`
    background-color: var(--black-two);
    box-shadow: 0 2px 4px 0 var(--light-navy-blue);
    border: solid 1px var(--light-navy-blue);
    color: var(--pale-grey);
  `;

export const whiteButtonStyled = ({ color }) =>
  ['secondary', 'white'].includes(color.toLowerCase()) &&
  css`
    box-shadow: 0 2px 4px 0 var(--pale-grey);
    background-color: var(--white);
    border: solid 1px var(--black-two);
    color: var(--black-two);
  `;

export const disabledButtonStyled = ({ color }) =>
  ['inactive', 'grey'].includes(color.toLowerCase()) &&
  css`
    background-color: var(--pale-grey);
    border: solid 1px var(--pale-grey);
    color: var(--bluey-grey);
  `;

export const ButtonStyled = styled.button`
  min-width: 150px;
  height: 40px;
  margin: var(--spacing-xs);
  font-size: var(--font-size-s);
  font-weight: var(--medium-font);
  line-height: 1;
  border-radius: var(--border-radius-l);
  cursor: pointer;
  color: var(--pale-grey);
  ${blackButtonStyled};
  ${whiteButtonStyled};
  ${disabledButtonStyled};
  &:focus {
    outline: 0;
  }
  & + button,
  & + a {
    margin-left: var(--spacing-m);
  }
`;
