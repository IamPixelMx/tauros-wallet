import styled from '@emotion/styled';

const paddingHeight = `var(--space-large) + var(--space-x-large)`;

export const SplashStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(192, 215, 229, 0.35);
  min-height: 5rem;
  max-width: 100vw;
  width: 100%;
  height: calc(100vh - (2 * ${paddingHeight}));
`;

export const SplashLogoStyled = styled.figure`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 9rem;
`;
