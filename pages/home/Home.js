import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

import { Layout, Splash } from 'components';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    handleLoad();
  }, []);

  const handleLoad = () => {
    // Manejo de Splash
    setTimeout(setIsLoaded(true), 1100);
  };

  return (
    <Layout>
      {isLoaded ? (
        <Fade right>
          <section id='home' className={'section'}>
            <div className='container'>
              <h2 className='title is-2 is-spaced'>¡Hola!</h2>
              <h5 className='subtitle is-5'>
                Bienvenid@ al mejor buscador de sitios de comida con estilo y vanguardia.
              </h5>
              <div className='content has-text-centered has-lg-margin-top'>
                <p className='is-size-5'> ¿Qué tipo de comida se te antoja?</p>
                <div className='buttons is-centered'>
                  <Link href='/vegetariana'>
                    <button className='button is-medium is-rounded is-info is-light'>
                      Vegetariana
                    </button>
                  </Link>
                  <Link href='/postres'>
                    <button className='button is-medium is-rounded is-success is-light'>
                      Postres
                    </button>
                  </Link>
                  <Link href='/cafecito'>
                    <button className='button is-medium is-rounded is-link is-light'>
                      Cafecito
                    </button>
                  </Link>
                  <Link href='/oriental'>
                    <button className='button is-medium is-rounded is-warning is-light'>
                      Oriental
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      ) : (
        <Fade big cascade>
          <Splash />
        </Fade>
      )}
    </Layout>
  );
};

export default Home;
