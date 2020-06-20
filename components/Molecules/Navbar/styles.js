import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const hasSize = ({ size }) =>
  size === 'small' &&
  css`
    height: calc(65px - (var(--spacing-l) * 2));
  `;

export const NavbarStyled = styled.div`
  line-height: var(--font-size-m);
  ${hasSize}
`;
