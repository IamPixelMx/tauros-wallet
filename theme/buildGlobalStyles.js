import { css } from '@emotion/core';

export const buildGlobalStyles = theme => css`
  /* fonts */
  @font-face {
    font-family: 'Proxima Nova Soft';
    font-weight: normal;
    src: url('/fonts/ProximaNovaSoft-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Proxima Nova Soft';
    font-weight: 500;
    src: url('fonts/ProximaNovaSoft-Regular.otf') format('opentype');
  }
  @font-face {
    font-family: 'Proxima Nova Soft';
    font-weight: 700;
    src: url('/fonts/ProximaNovaSoft-Medium.otf') format('opentype');
  }
  @font-face {
    font-family: 'Proxima Nova Soft';
    font-weight: 700;
    src: url('/fonts/ProximaNovaSoft-Medium.otf') format('opentype');
  }
  @font-face {
    font-family: 'Proxima Nova Soft';
    font-weight: 900;
    src: url('/fonts/ProximaNovaSoft-Bold.otf') format('opentype');
  }
  @font-face {
    font-family: 'Proxima Nova Medium';
    font-weight: 500;
    src: url('/fonts/ProximaNovaSoft-Medium.otf') format('opentype');
  }
  :root {
    --purple: ${theme.colors.purple};
    --dark-grey-blue: ${theme.colors.darkGreyBlue};
    --dark-grey-blue-10: ${theme.colors.darkGreyBlue10};
    --dark-grey-blue-33: ${theme.colors.darkGreyBlue33};
    --dark-grey-blue-50: ${theme.colors.darkGreyBlue50};
    --gray-background: ${theme.colors.grayBackground};
    --gray-background-20: ${theme.colors.grayBackground20};
    --white: ${theme.colors.white};
    --yellow: ${theme.colors.yellow};
    --red: ${theme.colors.red};
    --red-10: ${theme.colors.red10};
    --red-pink: ${theme.colors.redPink};
    --green: ${theme.colors.green};
    --light-gray: ${theme.colors.lightGray};
    --gray: ${theme.colors.gray};
    --cornflower: ${theme.colors.cornflower};
    --light-blue: ${theme.colors.lightBlue};
    --lighter-font: ${theme.fontWeight.light};
    --medium-font: ${theme.fontWeight.medium};
    --bolder-font: ${theme.fontWeight.bolder};
    --font-detail: ${theme.fontSize.detail};
    --font-x-small: ${theme.fontSize.xSmall};
    --font-small: ${theme.fontSize.small};
    --font-medium: ${theme.fontSize.medium};
    --font-large: ${theme.fontSize.large};
    --font-x-large: ${theme.fontSize.xLarge};
    --space-x-small: ${theme.spacing.xSmall};
    --space-small: ${theme.spacing.small};
    --space-medium: ${theme.spacing.medium};
    --space-large: ${theme.spacing.large};
    --space-x-large: ${theme.spacing.xLarge};
    --border-radius-standard: ${theme.borderRadius.standard};
    --border-radius-pill: ${theme.borderRadius.pill};
    --border-width-small: ${theme.borderWidth.small};
    --border-width-medium: ${theme.borderWidth.medium};
    --border-width-large: ${theme.borderWidth.large};
    --font-family: 'Proxima Nova Soft';
    min-height: 100vh;
    overflow-y: auto;
    background-color: var(--gray-background);
  }
  body {
    font-family: 'Proxima Nova Soft';
    font-size: 14px;
    line-height: 22px;
    margin: 0;
  }

  .content-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .has-padding-top {
    padding-top: 7.2rem;
  }
  .has-lg-margin-top {
    margin-top: 4.5rem;
  }
  .has-margin-bottom {
    margin-bottom: 2.5rem;
    margin-top: -4rem;
  }
  .is-vertical-align {
    vertical-align: middle;
  }
  a.navbar-item.is-active,
  .navbar-dropdown a.navbar-item.is-active,
  .navbar-dropdown a.navbar-item:hover {
    background-color: #d7eaf9 !important;
    color: #5b7bb2;
  }
`;
