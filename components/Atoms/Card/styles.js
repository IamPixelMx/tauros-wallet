import styled from '@emotion/styled';
import { css } from '@emotion/core';

const hasPadding = ({ padding }) =>
  padding &&
  css`
    padding: var(--spacing-xl);
  `;

const itemCardStyled = ({ size }) =>
  size.toLowerCase() === 'item' &&
  css`
    height: 92px;
  `;

const mediumCardStyled = ({ size }) =>
  size.toLowerCase() === 'medium' &&
  css`
    align-items: center;
    justify-content: center;
    width: calc(386px - (var(--spacing-l) * 2));
    padding: var(--spacing-l) var(--spacing-xs);
  `;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: var(--border-radius-s);
  border: solid 1px var(--pale-blue);
  padding: 0;
  overflow-y: auto;
  margin: var(--spacing-xs);
  ${hasPadding}
  ${itemCardStyled}
  ${mediumCardStyled}
  ${CardStyled} {
    margin-top: var(--spacing-xs);
  }
`;
