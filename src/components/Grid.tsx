import React, { useContext } from 'react';
import '../styles/misdemeanours.css';
import { MisdemeanoursContext } from '../App';
import { SelectedItemContext, SelectedMisdemeanoursContext } from './Router';
import MapMisdemeanours from './MapMisdemeanours';
import MapSelectedMisdemeanours from './MapSelectedMisdemeanours';


const Grid: React.FC = () => {
  const misdemeanours = useContext(MisdemeanoursContext);
  const selectedMisdemeanours = useContext(SelectedMisdemeanoursContext);
  const selectedItem = useContext(SelectedItemContext);

  return (
    <div className='grid-container'>
      {selectedItem === 'filter' && (
        <>
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
          {MapMisdemeanours()}
        </div>
        <div className='table-head'>Punishment Idea</div>
        </>
      )}
      {selectedItem !== 'filter' && (
        <>
        <div className='table-head'>
          Citizen ID
          {selectedMisdemeanours.map(misdemeanour => 
            (<div className='cell' key={misdemeanour.citizenId}>{misdemeanour.citizenId}</div>)
          )}
        </div>
        <div className='table-head'>
          Date
          {selectedMisdemeanours.map(misdemeanour => 
            (<div className='cell' key={misdemeanour.citizenId}>{misdemeanour.date}</div>)
          )}
        </div>
        <div className='table-head'>
          Misdemeanour
          {MapSelectedMisdemeanours()}
        </div>
        <div className='table-head'>Punishment Idea</div>
        </>
      )}
    </div>
  )
}

export default Grid;