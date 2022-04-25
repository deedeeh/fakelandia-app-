import React from 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <>
    <header>
      <h1>Fakelandia justice department</h1>
      <Navigation />
    </header>
    <div>
      <Outlet />
    </div>
  </>
)

export default Layout;