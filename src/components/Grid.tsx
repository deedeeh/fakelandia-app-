import React, { useContext } from 'react';
import '../styles/misdemeanours.css'
import { MisdemeanoursContext } from '../App'

const Grid: React.FC = () => {
  const misdemeanours = useContext(MisdemeanoursContext);

  return (
    <div className='grid-container'>
      <div className='table-head'>
        Citizen ID
        {misdemeanours.map(misdemeanour => (<div className='cell' key={misdemeanour.citizenId}>{misdemeanour.citizenId}</div>))}
      </div>
      <div className='table-head'>
        Date
        {misdemeanours.map(misdemeanour => (<div className='cell' key={misdemeanour.citizenId}>{misdemeanour.date}</div>))}
      </div>
      <div className='table-head'>
        Misdemeanour
        {misdemeanours.map(misdemeanour => (<div className='cell' key={misdemeanour.citizenId}>{misdemeanour.misdemeanour}</div>))}
      </div>
      <div className='table-head'>Punishment Idea</div>
    </div>
  )
}

export default Grid;