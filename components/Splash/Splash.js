import PropTypes from 'prop-types';

const Splash = ({ isLoaded }) => (
  <div id='splash' className={isLoaded ? ' splash view hide' : ' splash view'}>
    <figure className='level-item image splash-logo'>
      <img src='/logo.png' alt='logo-splash' />
    </figure>
    <style jsx>
      {`
        .splash {
          padding-top: 15vh;
        }
        .splash-logo img {
          width: 15rem;
          height: auto;
        }
      `}
    </style>
  </div>
);

Splash.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default Splash;
