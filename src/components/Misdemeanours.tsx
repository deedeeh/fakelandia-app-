import React from 'react';
import '../styles/misdemeanours.css'
import Grid from './Grid';

const Misdemeanours: React.FC = () => 
  <div className='content-container content-container-md--center'>
    <select name='filterBy' id='filterBy'>
      <option value='filter'>Filter</option>
      <option value='lift'>Lift</option>
      <option value='vegetables'>Vegetables</option>
      <option value='rudeness'>Rudeness</option>
      <option value='united'>United</option>
    </select>
    <Grid />
  </div>

export default Misdemeanours;