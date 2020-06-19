import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';

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
      <Navbar />
      {isLoading ? <Loader isFullScreen /> : children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
