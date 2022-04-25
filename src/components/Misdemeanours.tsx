import React from 'react';
import '../styles/misdemeanours.css'
import Grid from './Grid';

const Misdemeanours: React.FC = () => 
  <div className='content-container content-container-md--center'>
    <select name='filterBy' id='filterBy'>
      <option value='filter'>Filter</option>
    </select>
    <Grid />
  </div>

export default Misdemeanours;