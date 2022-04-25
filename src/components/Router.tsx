import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Confession from './Confession';
import Home from './Home'
import Misdemeanours from './Misdemeanours';
import NotFound from './NotFound';
import Layout from './Layout';

const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/misdemeanours' element={<Misdemeanours />} />
      <Route path='/confession' element={<Confession />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
)

export default Router;