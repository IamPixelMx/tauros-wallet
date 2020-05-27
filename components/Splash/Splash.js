import { SplashStyled, SplashLogoStyled } from './styles';

const Splash = () => (
  <SplashStyled id='splash'>
    <SplashLogoStyled className='level-item image'>
      <img src='/logo.png' alt='logo-splash' />
    </SplashLogoStyled>
  </SplashStyled>
);

export default Splash;
