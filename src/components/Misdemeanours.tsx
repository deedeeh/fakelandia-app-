import React from 'react';
import '../styles/misdemeanours.css'

const Misdemeanours: React.FC = () => 
  <div className='content-container content-container--center'>
    <select name='filterBy' id='filterBy'>
      <option value='filter'>Filter</option>
    </select>
  </div>

export default Misdemeanours;