import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Confession from './Confession';
import Home from './Home'
import Misdemeanours from './Misdemeanours';
import NotFound from './NotFound';
import Layout from './Layout';
import { IMisdemeanour } from '../generate_misdemeanours';
import { MisdemeanoursContext } from '../App';
import { SelectedMisdemeanoursContext, SelectedItemContext, SubjectContext, SelectedReasonContext, ReasonTextContext } from './ReactContext';
import SubmittedData from './SubmittedData';

const Router: React.FC = () => {
  const [ selectedMisdemeanours, setSelectedMisdemeanours] = useState<Array<IMisdemeanour>>([]);
  const [ selectedItem, setSelectedItem ] = useState<string>('filter');
  const [ subject, setSubject ] = useState<string>('');
  const [ selectedReason, setSelectedReason ] = useState<string>('select');
  const [ reasonText, setReasonText ] = useState<string>('');
  const [ disabledButton, setDisabledButton ] = useState<boolean>(true);
  const [ submittedData, setSubmittedData ] = useState<SubmittedData>({subject, selectedReason, reasonText})

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
    if(e.target.value.length >= 3 && e.target.value.length <= 50 && /^[a-zA-Z]+$/.test(e.target.value) && selectedReason !== 'select' && reasonText.length >= 18 && reasonText.length <= 150) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }

  const handleOnChangeSelectReason = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedReason(e.target.value);
    if(subject.length >= 3 && subject.length <= 50 && /^[a-zA-Z]+$/.test(subject) && e.target.value !== 'select' && reasonText.length >= 18 && reasonText.length <= 150) { 
      setDisabledButton(false) 
    } else {
      setDisabledButton(true)
    }
  }

  const handleOnChangeReasonText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setReasonText(e.target.value);
    if(subject.length >= 3 && subject.length <= 50 && /^[a-zA-Z]+$/.test(subject) && selectedReason !== 'select' && e.target.value.length >= 18 && e.target.value.length <= 150) { 
      setDisabledButton(false) 
    } else {
      setDisabledButton(true)
    }
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { subject, selectedReason, reasonText }
    if(formData.selectedReason === 'talk') console.log(formData);
    setSubmittedData({...formData});
    setDisabledButton(true);
    resetForm();
  }
 
  const resetForm = () => {
    setSubject('');
    setSelectedReason('select');
    setReasonText('');
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
                        disabledButton={disabledButton}
                        handleOnChangeSubject={handleOnChangeSubject}
                        handleOnChangeSelectReason={handleOnChangeSelectReason}
                        handleOnChangeReasonText={handleOnChangeReasonText}
                        handleOnSubmit={handleOnSubmit}
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