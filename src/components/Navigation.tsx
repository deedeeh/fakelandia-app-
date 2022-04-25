import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/misdemeanours'>Misdemeanours</NavLink></li>
      <li><NavLink to='/confession'>Confession</NavLink></li>
    </ul>
  </nav>
)

export default Navigation;