import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
// Redux modules
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
// Configfuration for redux store
import configureStore from 'redux/configureStore';

// Emotion CSS
import { ThemeProvider } from 'emotion-theming';
import { GlobalStyles, theme } from 'styles';

class TaurosWallet extends App {
  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(TaurosWallet));
