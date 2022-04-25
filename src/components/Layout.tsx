import React from 'react';
import Navigation from './Navigation';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from './Footer';

const Layout: React.FC = () => (
  <div className='container'>
    <header className='header'>
      <h1 className='header__heading'>
        <NavLink className='heading__link' to='/'>Fakelandia justice department</NavLink>
      </h1>
      <Navigation />
    </header>
    <Outlet />
    <Footer />
  </div>
)


export default Layout;