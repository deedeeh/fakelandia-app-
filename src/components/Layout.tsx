import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout: React.FC = () => (
  <div className='container'>
    <header className='header'>
      <h1 className='header__heading'>Fakelandia justice department</h1>
      <Navigation />
    </header>
    <Outlet />
    <Footer />
  </div>
)


export default Layout;