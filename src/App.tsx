import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Router';
import generateMisdemeanours, { IMisdemeanour } from './generate_misdemeanours'; 

export const MisdemeanoursContext = React.createContext<Array<IMisdemeanour>>([]);

function App() {
  const [ misdemeanours, setMisdemeanours ] = useState<Array<IMisdemeanour>>([]);

  useEffect(() => {
    getMisdemeanours();
  }, [])

  const getMisdemeanours = async () => {
    const generatedMisdemeanours = await generateMisdemeanours(10); 
    setMisdemeanours(generatedMisdemeanours);
  }

  return (
    <MisdemeanoursContext.Provider value={misdemeanours}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MisdemeanoursContext.Provider>
  )
}

export default App;
