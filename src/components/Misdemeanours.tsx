import React, { FormEvent, useContext } from 'react';
import '../styles/misdemeanours.css'
import Grid from './Grid';
import { SelectedItemContext } from './Router';

interface MisdemeanoursProps {
  handleOnChangeFilter: (e: FormEvent<HTMLSelectElement>) => void
}

const Misdemeanours: React.FC<MisdemeanoursProps> = ({ handleOnChangeFilter }) => {
  const selectedItem = useContext(SelectedItemContext)

  return(
    <div className='content-container content-container-md--center'>
      <select value={selectedItem} name='filterBy' id='filterBy' onChange={handleOnChangeFilter}>
        <option value='filter'>Filter</option>
        <option value='lift'>Lift</option>
        <option value='vegetables'>Vegetables</option>
        <option value='rudeness'>Rudeness</option>
        <option value='united'>United</option>
      </select>
      <Grid />
    </div>
  )
}

export default Misdemeanours;