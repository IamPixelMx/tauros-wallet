import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import { connect } from 'react-redux';

import { Loader, Navbar } from 'components';

const Layout = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.onRouteChangeStart = () => {
      setIsLoading(true);
    };
    Router.onRouteChangeComplete = () => {
      setIsLoading(false);
    };
    Router.onRouteChangeError = () => {
      setIsLoading(false);
    };
  });

  return (
    <main id='main'>
      <Navbar activeRoute={router.pathname} />
      {isLoading ? <Loader isFullScreen /> : children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Layout);
