import Router from 'next/router';
import PropTypes from 'prop-types';

const ErrorPage = ({ statusCode }) => (
  <section className='content-container'>
    <img className='error-image' alt='error-img' src={`/errors/${statusCode}.jpg`} />
    <br />
    <br />
    <div className='buttons is-centered'>
      <button
        className='button level-item is-info is-danger is-outlined is-medium is-rounded'
        onClick={() => Router.push('/')}
      >
        Ir a página de inicio
      </button>
    </div>
  </section>
);

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

ErrorPage.defaultProps = {
  statusCode: 200,
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
