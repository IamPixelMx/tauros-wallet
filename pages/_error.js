import Router from 'next/router';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ErrorPage = ({ statusCode }) => (
  <ErrorStyled>
    <img alt='error-img' src={`/errors/${statusCode}.jpg`} />
    <button className='button is-danger is-medium is-rounded' onClick={() => Router.push('/')}>
      Ir a página de inicio
    </button>
  </ErrorStyled>
);

const ErrorStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    position: absolute;
    top: 65%;
  }
`;

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

ErrorPage.defaultProps = {
  statusCode: 404,
};

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

export default ErrorPage;
