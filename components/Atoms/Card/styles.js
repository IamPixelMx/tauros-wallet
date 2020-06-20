import styled from '@emotion/styled';
import { css } from '@emotion/core';

const paddingHeight = `var(--spacing-l) + var(--spacing-xl)`;

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
    @media (max-width: 769px) {
      height: 60px;
      margin-bottom: var(--spacing-xs);
    }
  `;

const mediumCardStyled = ({ size }) =>
  size.toLowerCase() === 'medium' &&
  css`
    align-items: center;
    justify-content: center;
    height: calc(503px - (var(--spacing-l) * 2));
    padding: var(--spacing-l) var(--spacing-xs);
  `;

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: var(--border-radius-s);
  border: solid 1px var(--pale-blue);
  justify-content: center;
  padding: 0;
  margin: 0;
  max-height: calc(100vh - (2 * ${paddingHeight}));
  ${withPadding}
  ${withOverflow}
  @media (max-width: 769px) {
    padding: var(--spacing-xs);
    display: flow-root;
    margin-bottom: var(--spacing-l);
  }
  ${itemCardStyled}
  ${mediumCardStyled}
`;
