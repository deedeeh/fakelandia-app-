import React, { useState, useContext, FormEvent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Confession from './Confession';
import Home from './Home'
import Misdemeanours from './Misdemeanours';
import NotFound from './NotFound';
import Layout from './Layout';
import { IMisdemeanour } from '../generate_misdemeanours';
import { MisdemeanoursContext } from '../App';

export const SelectedMisdemeanoursContext = React.createContext<Array<IMisdemeanour>>([]);
export const SelectedItemContext = React.createContext<string>('filter');

const Router: React.FC = () => {
  const [ selectedMisdemeanours, setSelectedMisdemeanours] = useState<Array<IMisdemeanour>>([]);
  const [ selectedItem, setSelectedItem ] = useState<string>('filter');

  const misdemeanours = useContext(MisdemeanoursContext);

  const handleOnChangeFilter = (e: FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const filteredMisdemeanours = misdemeanours.filter(misdemeanour => misdemeanour.misdemeanour === e.currentTarget.value);
    setSelectedMisdemeanours(filteredMisdemeanours);
    setSelectedItem(e.currentTarget.value);
  }

  return(
    <SelectedMisdemeanoursContext.Provider value={selectedMisdemeanours}>
      <SelectedItemContext.Provider value={selectedItem}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/misdemeanours' element={<Misdemeanours handleOnChangeFilter={handleOnChangeFilter} />} />
            <Route path='/confession' element={<Confession />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </SelectedItemContext.Provider>
    </SelectedMisdemeanoursContext.Provider>
  )
}



export default Router;