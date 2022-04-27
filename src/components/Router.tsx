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
export const SubjectContext = React.createContext<string>('');
export const SelectedReasonContext = React.createContext<string>('Select');
export const ReasonTextContext = React.createContext<string>('');

const Router: React.FC = () => {
  const [ selectedMisdemeanours, setSelectedMisdemeanours] = useState<Array<IMisdemeanour>>([]);
  const [ selectedItem, setSelectedItem ] = useState<string>('filter');
  const [ subject, setSubject ] = useState<string>('');
  const [ selectedReason, setSelectedReason ] = useState<string>('Select');
  const [ reasonText, setReasonText ] = useState<string>('');

  const misdemeanours = useContext(MisdemeanoursContext);

  const handleOnChangeFilter = (e: FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const filteredMisdemeanours = misdemeanours.filter(misdemeanour => misdemeanour.misdemeanour === e.currentTarget.value);
    setSelectedMisdemeanours(filteredMisdemeanours);
    setSelectedItem(e.currentTarget.value);
  }

  const handleOnChangeSubject = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSubject(e.currentTarget.value);
  }

  const handleOnChangeSelectReason = (e: FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedReason(e.currentTarget.value);
  }

  const handleOnChangeReasonText = (e: FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setReasonText(e.currentTarget.value);
  }

  return(
    <SelectedMisdemeanoursContext.Provider value={selectedMisdemeanours}>
      <SelectedItemContext.Provider value={selectedItem}>
        <SubjectContext.Provider value={subject}>
          <SelectedReasonContext.Provider value={selectedReason}>
            <ReasonTextContext.Provider value={reasonText}>
              <Routes>
                <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='/misdemeanours' element={<Misdemeanours handleOnChangeFilter={handleOnChangeFilter} />} />
                  <Route path='/confession' element={
                    <Confession 
                      handleOnChangeSubject={handleOnChangeSubject}
                      handleOnChangeSelectReason={handleOnChangeSelectReason}
                      handleOnChangeReasonText={handleOnChangeReasonText}
                    />} 
                  />
                  <Route path='*' element={<NotFound />} />
                </Route>
              </Routes>
            </ReasonTextContext.Provider>
          </SelectedReasonContext.Provider>
        </SubjectContext.Provider>
      </SelectedItemContext.Provider>
    </SelectedMisdemeanoursContext.Provider>
  )
}

export default Router;