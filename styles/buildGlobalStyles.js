import { css } from '@emotion/core';

export const buildGlobalStyles = theme => css`
/* fonts */
@font-face {
  font-family: 'Roboto';
  font-weight: normal;
  src: url('/fonts/Roboto-Regular.ttf') format('opentype');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 400;
  src: url('fonts/Roboto-Regular.ttf') format('opentype');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 500;
  src: url('fonts/Roboto-Regular.ttf') format('opentype');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 700;
  src: url('/fonts/Roboto-Medium.ttf') format('opentype');
}
@font-face {
  font-family: 'Roboto';
  font-weight: 900;
  src: url('/fonts/Roboto-Bold.otf') format('opentype');
}

  body {
    font-size: 15px;
    line-height: 22px;
    position:relative;
    width:100%
    margin: 0;
  }

  nav img {
    margin-top: 3rem;
    margin-left: .5rem;
  }

  :root {
    --black: ${theme.colors.black};
    --black-two: ${theme.colors.blackTwo};
    --black-76: ${theme.colors.black76};
    --bluey-grey: ${theme.colors.blueyGrey};
    --dark-mint: ${theme.colors.darkMint};
    --light-gold: ${theme.colors.lightGold};
    --light-navy-blue: ${theme.colors.lightNavyBlue};
    --mango: ${theme.colors.mango};
    --pale-blue: ${theme.colors.paleBlue};
    --pale-grey: ${theme.colors.paleGrey};
    --steel-66: ${theme.colors.steel66};
    --white: ${theme.colors.white};
    --white-96: ${theme.colors.white96};
    --lighter-font: ${theme.fontWeight.lighter};
    --medium-font: ${theme.fontWeight.medium};
    --bolder-font: ${theme.fontWeight.bolder};
    --font-detail: ${theme.fontSize.detail};
    --font-size-xs: ${theme.fontSize.xs};
    --font-size-s: ${theme.fontSize.s};
    --font-size-m: ${theme.fontSize.m};
    --font-size-l: ${theme.fontSize.l};
    --font-size-xl: ${theme.fontSize.xl};
    --spacing-xs: ${theme.spacing.xs};
    --spacing-s: ${theme.spacing.s};
    --spacing-m: ${theme.spacing.m};
    --spacing-l: ${theme.spacing.l};
    --spacing-xl: ${theme.spacing.xl};
    --border-radius-standard: ${theme.borderRadius.standard};
    --border-radius-pill: ${theme.borderRadius.pill};
    --border-radius-s: ${theme.borderRadius.s};
    --border-radius-m: ${theme.borderRadius.m};
    --border-radius-l: ${theme.borderRadius.l};
    --border-width-s: ${theme.borderWidth.s};
    --border-width-m: ${theme.borderWidth.m};
    --border-width-l: ${theme.borderWidth.l};
    min-height: 100vh;
    overflow-y: auto;
    background-color: var(--white);
  }
`;
