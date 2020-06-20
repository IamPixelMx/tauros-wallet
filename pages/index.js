import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getState } from 'store/selectors';
import { GET_BALANCES_LIST } from 'store/constants';

import { Dashboard, Layout } from 'components';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(getState);

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
