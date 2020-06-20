import styled from '@emotion/styled';
import { css } from '@emotion/core';

const withPadding = ({ hasPadding }) =>
  hasPadding &&
  css`
    padding: var(--spacing-s);
  `;
const withOverflow = ({ hasOverflow }) =>
  hasOverflow &&
  css`
    overflow-y: auto;
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
  margin: 0;
  margin-top: var(--spacing-xs);
  ${withPadding}
  ${withOverflow}
  ${itemCardStyled}
  ${mediumCardStyled}
`;
