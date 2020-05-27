import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
// config
import configureStore from 'redux/configureStore';
// css
import 'bulma/css/bulma.min.css';

import { ThemeProvider } from 'emotion-theming';
import { GlobalStyles } from 'theme';
import { theme } from 'utils';

// title
import { titles } from 'utils';

import { Footer, Navbar, TitleTab } from 'components';

class MelpApp extends App {
  render() {
    const { Component, pageProps, router, store } = this.props;

    return (
      <Provider store={store}>
        <TitleTab title={titles[router.pathname]} />
        <Navbar activeRoute={router.pathname} />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
        <Footer />
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MelpApp));
