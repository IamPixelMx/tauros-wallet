import React from 'react';
import { withTheme } from 'emotion-theming';
import { Global } from '@emotion/core';
import { buildGlobalStyles } from './buildGlobalStyles';

const GlobalStyles = withTheme(({ theme }) => <Global styles={buildGlobalStyles(theme)} />);

export default GlobalStyles;
