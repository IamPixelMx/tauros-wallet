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
    --primary: ${theme.colors.lightPurple};
    --primary-50: ${theme.colors.lightPurple50};
    --primary-15: ${theme.colors.lightPurple15};
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
    --font-download-link: ${theme.fontSize.downloadLink};
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

  //  Custom styles

  .view {
    min-height: 100vh;
  }
  .hide {
    display: none;
  }
  .content-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .has-padding-top {
    padding-top: 7.2rem;
  }
  .has-margin-top {
    margin-top: 2.5rem;
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
  .buttons {
    margin-top: 2rem;
  }
  .button {
    border-width: 0.12rem;
  }
  .footer {
    padding: 1.95rem 1rem 2.65em;
  }
  .image img {
    margin-top: 0.55rem;
    margin-left: 0.9rem;
  }
  img.is-rounded {
    margin: 0;
  }
  .is-nice-blue {
    color: #5b7bb2;
    font-weight: 600;
  }
  a.is-nice-blue {
    font-size: 1.3rem;
    font-weight: 400;
  }
  a.navbar-item.is-active,
  .navbar-dropdown a.navbar-item.is-active,
  .navbar-dropdown a.navbar-item:hover {
    background-color: #d7eaf9 !important;
    color: #5b7bb2;
  }
  .is-bgnice-blue {
    background-color: #b3d4fc;
  }
  .is-info.input {
    border-color: #5b7bb2;
    border-width: 0.1rem;
  }
  .control.has-icons-left .icon.is-left {
    left: 3px;
    height: 1.6rem;
    margin-top: 0.47rem;
  }
  .card {
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  figure.media-left {
    margin: 1rem;
  }
  p.title.is-not-spaced {
    margin-bottom: 0.25rem;
  }
  .tabs.is-toggle li.is-active a {
    background: #5b7bb2;
    border-color: #5b7bb2;
  }
  .icon.hvr-icon-pulse-shrink {
    margin-top: 1.2rem;
    min-width: 17.5rem;
  }
  .hvr-icon-pulse-shrink .hvr-icon {
    width: 1.1rem;
  }
  @media (max-width: 1023px) {
    .section {
      padding-left: 0.4rem;
      padding-right: 0.4rem;
    }
    a.navbar-item,
    a.navbar-link {
      border-bottom: 1px dashed #5b7bb2;
      padding: 1.2rem;
      margin-left: 1rem;
      margin-right: 1rem;
      font-size: 0.9rem;
      color: #777;
    }
  }
`;
