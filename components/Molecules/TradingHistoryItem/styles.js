import styled from '@emotion/styled';

export const IconStyled = styled.figure`
  position: relative
  display: flex;
  align-items: right;
`;

export const SplitContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--spacing-m);
  height: calc(100% - var(--spacing-xs));
  padding: var(--spacing-m);
`;
