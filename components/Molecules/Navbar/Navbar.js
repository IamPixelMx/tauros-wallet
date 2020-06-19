import React, { useState } from 'react';
// Bulma CSS
import 'bulma/css/bulma.min.css';

import { NavbarItem } from '.';

const NAV_ITEMS = [
  { page: 'Tarjeta Tauros', route: '/' },
  { page: 'Wallets', route: '/' },
  { page: 'Exchange', route: '/' },
  { page: 'Perfil', route: '/' },
];

const Navbar = props => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar-brand'>
          <figure className='image is-128x128'>
            <img src='/tauros.png' alt='logo' />
          </figure>
          <span
            className={isNavOpen ? 'navbar-burger is-active' : 'navbar-burger'}
            data-target='navbarMenuHeroB'
            onClick={toggle}
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
