import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import logoLight from '~/assets/logos/logo-light.svg';

import './styles.scss';

const Header = () => {
  return (
    <header className="header" data-testid="header">
      <div className="container header-containter">
        <Link to="/home">
          <img
            src={logoLight}
            alt="Logo de Fashionista"
            data-testid="header-logo"
          />
        </Link>

        <nav className="navbar">
          <div className="navbar__search__icon">
            <FiSearch size={22} color="#333" data-testid="header-search-icon" />
          </div>
          <div className="navbar__bag__icon">
            <FiShoppingBag
              size={22}
              color="#333"
              data-testid="header-bag-icon"
            />
            <div className="navbar__bag__ballon">
              <span>0</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
