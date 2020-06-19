import styled from '@emotion/styled';
import { css } from '@emotion/core';

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

const isBoldStyled = ({ isBold }) =>
  isBold &&
  css`
    font-weight: var(--bolder-font);
  `;

export const CardSubtitleStyled = styled.h3`
  ${labelsBase};
  font-weight: var(--medium-font);
  ${isBoldStyled};
`;

export const CardTitleStyled = styled.h2`
  ${labelsBase};
  font-size: var(--font-size-s);
  font-weight: var(--medium-font);
  line-height: var(--font-size-s);
  ${isBoldStyled};
`;
