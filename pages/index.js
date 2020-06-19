import React, { useState, useEffect } from 'react';

import { Dashboard, Layout } from 'components';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  /*
   * Use 'useEffect' to manage Splash effect
   */
  // useEffect(() => {}, []);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Home;
