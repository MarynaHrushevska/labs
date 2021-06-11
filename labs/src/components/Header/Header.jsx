import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header-wrapper'>
      <NavLink to='/article' className='header__title'>
        SHARETRADE.COM
      </NavLink>
    </div>
  );
}