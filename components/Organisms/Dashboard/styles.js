import styled from '@emotion/styled';

export const DashboardSplitCardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: var(--spacing-xs);
  height: calc(100% - var(--spacing-xs));
`;

export const DashboardContentStyled = styled.div`
  margin-top: var(--spacing-m);
  margin-bottom: var(--spacing-m);
`;
