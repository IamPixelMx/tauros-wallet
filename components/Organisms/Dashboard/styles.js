import styled from '@emotion/styled';
import { css } from '@emotion/core';

const withPadding = ({ hasPadding }) =>
  hasPadding &&
  css`
    padding: var(--spacing-s);
  `;

export const DashboardSplitCardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--spacing-l);
  height: calc(100% - var(--spacing-xs));
  padding: var(--spacing-m);
  /* smartphones, touchscreens */
  @media (max-width: 769px) and (hover: none) and (pointer: coarse) {
    display: flow-root;
  }
`;

export const DashboardContentStyled = styled.div`
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-l);
  text-align: center;
  ${withPadding};
`;
