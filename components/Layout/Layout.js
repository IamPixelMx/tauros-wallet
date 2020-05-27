import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';

// import { cleanUsersMatch } from "../store/actions/users-actions";
// import { cleanReposMatch } from "../store/actions/repositories-actions";
import { Loader } from 'components';

const Layout = ({ children, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Router.onRouteChangeStart = () => {
      // const { dispatch } = this.props;
      // dispatch(cleanUsersMatch());
      // dispatch(cleanReposMatch());
      setIsLoading(true);
      console.log('empezo');
    };
    Router.onRouteChangeComplete = () => {
      setIsLoading(false);
      console.log('completo');
    };
    Router.onRouteChangeError = () => {
      setIsLoading(false);
      console.log('error');
    };
  });

  return (
    <main id='main' className='has-padding-top section view'>
      {isLoading ? <Loader isFullScreen /> : children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypesfunc.isRequired,
};

export default connect()(Layout);
