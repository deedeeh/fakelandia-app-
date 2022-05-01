import React, { ChangeEvent } from 'react';
import '../styles/confession.css';
import ConfessionForm from './ConfessionForm';

export interface ConfessionProps {
  handleOnChangeSubject: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeSelectReason: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeReasonText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Confession: React.FC<ConfessionProps> = ({ handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText }) => {

  return (
    <main className='content-container'>
      <p className='conf-paragraph'>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>
      <p className='conf-paragraph'>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
      <ConfessionForm 
        handleOnChangeSubject={handleOnChangeSubject} 
        handleOnChangeSelectReason={handleOnChangeSelectReason}
        handleOnChangeReasonText={handleOnChangeReasonText}
      />
    </main>
  )
}

export default Confession;