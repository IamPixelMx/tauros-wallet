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
  margin-top: var(--spacing-m);
  /* smartphones, touchscreens */
  @media (max-width: 769px) {
    display: flow-root;
    margin-top: var(--spacing-xs);
  }
`;

export const DashboardSplitContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--spacing-m);
  padding: var(--spacing-m);
`;

export const DashboardContentStyled = styled.div`
  text-align: -webkit-center;
  @media (max-width: 769px) {
    margin-top: var(--spacing-xl);
    margin-bottom: var(--spacing-l);
  }
  button {
    margin: var(--spacing-s) 0;
  }
  ${withPadding};
`;
