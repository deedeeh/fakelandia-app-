import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <NavLink 
            className='nav__link' 
            to='/'
            >Home
          </NavLink>
        </li>
        <li className='nav__item'><NavLink className='nav__link' to='/misdemeanours'>Misdemeanours</NavLink></li>
        <li className='nav__item'><NavLink className='nav__link' to='/confession'>Confess to us</NavLink></li>
      </ul>
    </nav>
  )
} 

export default Navigation;