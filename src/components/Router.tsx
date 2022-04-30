import React, { useState, useContext, ChangeEvent } from 'react';
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
export const DisabledButtonContext = React.createContext<boolean>(true);

const Router: React.FC = () => {
  const isDisabled: boolean = true;
  const [ selectedMisdemeanours, setSelectedMisdemeanours] = useState<Array<IMisdemeanour>>([]);
  const [ selectedItem, setSelectedItem ] = useState<string>('filter');
  const [ subject, setSubject ] = useState<string>('');
  const [ selectedReason, setSelectedReason ] = useState<string>('select');
  const [ reasonText, setReasonText ] = useState<string>('');
  const [ disabledButton, setDisabledButton ] = useState<boolean>(isDisabled);

  const misdemeanours = useContext(MisdemeanoursContext);

  const handleOnChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    const filteredMisdemeanours = misdemeanours.filter(misdemeanour => misdemeanour.misdemeanour === e.currentTarget.value);
    setSelectedMisdemeanours(filteredMisdemeanours);
    setSelectedItem(e.target.value);
  }

  const handleOnChangeSubject = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSubject(e.target.value);
    if(e.target.value.length >= 3 && e.target.value.length <= 50 && /^[a-zA-Z]+$/.test(e.target.value) && selectedReason !== 'select') {
      setDisabledButton(false);
    } else {
      setDisabledButton(isDisabled);
    }
  }

  const handleOnChangeSelectReason = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedReason(e.target.value);
    if(subject.length >= 3 && subject.length <= 50 && /^[a-zA-Z]+$/.test(subject) && e.target.value !== 'select') { 
      setDisabledButton(false) 
    } else {
      setDisabledButton(isDisabled)
    };
  }

  const handleOnChangeReasonText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setReasonText(e.target.value);
  }

  return(
    <SelectedMisdemeanoursContext.Provider value={selectedMisdemeanours}>
      <SelectedItemContext.Provider value={selectedItem}>
        <SubjectContext.Provider value={subject}>
          <SelectedReasonContext.Provider value={selectedReason}>
            <ReasonTextContext.Provider value={reasonText}>
              <DisabledButtonContext.Provider value={disabledButton}>
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
              </DisabledButtonContext.Provider>
            </ReasonTextContext.Provider>
          </SelectedReasonContext.Provider>
        </SubjectContext.Provider>
      </SelectedItemContext.Provider>
    </SelectedMisdemeanoursContext.Provider>
  )
}

export default Router;