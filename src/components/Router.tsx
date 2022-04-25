import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Confession from './Confession';
import Home from './Home'
import Misdemeanours from './Misdemeanours';

const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/misdemeanours' element={<Misdemeanours />} />
    <Route path='/confession' element={<Confession />} />
  </Routes>
)

export default Router;