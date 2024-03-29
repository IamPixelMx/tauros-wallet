import React, { useState } from 'react';

import { NavbarItem } from '.';
import { NavbarStyled } from './styles';

const NAV_ITEMS = [
  { page: 'Tarjeta Tauros', route: '/' },
  { page: 'Wallets', route: '/' },
  { page: 'Exchange', route: '/' },
];
const DROP_ITEMS = [{ label: 'Configuración' }, { label: 'Cerrar Sesión' }];

const Navbar = props => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDrop = () => {
    setIsDropOpen(!isDropOpen);
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item'>
            <img src='/tauros.png' width='112' height='28' alt='Tauros' />
          </a>
          <span
            className={isNavOpen ? 'navbar-burger burger is-active' : 'navbar-burger burger'}
            data-target='navbarMenuHeroB'
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={isNavOpen ? 'navbar-menu is-active' : 'navbar-menu'} id='navbarMenuHeroB'>
          <div className={isNavOpen ? 'navbar-end is-active' : 'navbar-end'}>
            {NAV_ITEMS.map(item => (
              <NavbarItem key={`${item.page}-nav-item`} {...item} {...props} />
            ))}

            <div
              className={
                isDropOpen ? 'navbar-item has-dropdown is-active' : 'navbar-item has-dropdown'
              }
              onClick={() => {
                toggleDrop();
                toggleNav();
              }}
            >
              <hr className='navbar-divider' />
              <a className='navbar-link is-arrowless'>Perfil</a>
              <div className='navbar-dropdown is-boxed is-right'>
                {DROP_ITEMS.map(({ label }) => (
                  <a key={`${label}-drop`} className='navbar-item'>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
