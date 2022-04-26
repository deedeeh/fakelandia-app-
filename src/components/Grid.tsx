import React, { useContext } from 'react';
import '../styles/misdemeanours.css'
import { MisdemeanoursContext } from '../App'

const Grid: React.FC = () => {
  const misdemeanours = useContext(MisdemeanoursContext);

  const misdemeanourMapping = () => {
    let sentence: string = '';
    return misdemeanours.map(misdemeanour => {
      switch(misdemeanour.misdemeanour) {
        case 'lift':
          sentence = 'Speaking in a Lift = 🗣';
          break;
        case 'vegetables':
          sentence = 'Not Eating Your Vegetables = 🥗';
          break;
        case 'rudeness':
          sentence = 'Mild Public Rudeness = 🤪';
          break;
        case 'united':
          sentence = 'Supporting Manchester United = 😈';
          break
      }
      return <div className='cell' key={misdemeanour.citizenId}>{sentence}</div>
    })
  }

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
        {misdemeanourMapping()}
      </div>
      <div className='table-head'>Punishment Idea</div>
    </div>
  )
}

export default Grid;