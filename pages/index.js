import React, { useState, useEffect } from 'react';

// import { Layout } from 'components';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  /*
   * Use 'useEffect' to manage Splash effect
   */
  useEffect(() => {
    handleLoad();
  }, []);

  // Function to disable Splash once the page is loaded
  const handleLoad = () => {
    setTimeout(setIsLoaded(true), 1100);
  };

  return <div>Holiiiiiii</div>;
};

export default Home;
