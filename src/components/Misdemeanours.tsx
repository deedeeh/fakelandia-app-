import React, { ChangeEvent, useContext } from 'react';
import '../styles/misdemeanours.css'
import Table from './Table';
import { SelectedItemContext } from './Router';

interface MisdemeanoursProps {
  handleOnChangeFilter: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Misdemeanours: React.FC<MisdemeanoursProps> = ({ handleOnChangeFilter }) => {
  const selectedItem = useContext(SelectedItemContext)

  return(
    <div className='content-container content-container--center'>
      <select value={selectedItem} name='filterBy' id='filterBy' onChange={handleOnChangeFilter}>
        <option value='filter'>Filter</option>
        <option value='lift'>Lift</option>
        <option value='vegetables'>Vegetables</option>
        <option value='rudeness'>Rudeness</option>
        <option value='united'>United</option>
      </select>
      <Table />
    </div>
  )
}

export default Misdemeanours;