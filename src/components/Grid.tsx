import React from 'react';
import '../styles/misdemeanours.css'

const Grid: React.FC = () => (
  <div className='grid-container'>
    <div className='item '>Citizen ID</div>
    <div className='item item--border'>Date</div>
    <div className='item item--border'>Misdemeanour</div>
    <div className='item item--border'>Punishment Idea</div>
  </div>
)

export default Grid;