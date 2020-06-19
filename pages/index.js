import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_BALANCES_LIST } from '../store/constants';

import { Dashboard, Layout } from 'components';

const Home = () => {
  const dispatch = useDispatch();

  /*
   * Use 'useEffect' to get Melp data
   */
  useEffect(() => {
    dispatch({ type: GET_BALANCES_LIST });
  }, []);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Home;
