import React, { FormEvent } from 'react';
import '../styles/confession.css';
import ConfessionForm from './ConfessionForm';

export interface ConfessionProps {
  handleOnChangeSubject: (e: FormEvent<HTMLInputElement>) => void
  handleOnChangeSelectReason: (e: FormEvent<HTMLSelectElement>) => void
  handleOnChangeReasonText: (e: FormEvent<HTMLTextAreaElement>) => void
}

const Confession: React.FC<ConfessionProps> = ({ handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText }) => 
  <main className='content-container'>
    <p className='conf-paragraph'>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>
    <p className='conf-paragraph'>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
    <ConfessionForm 
      handleOnChangeSubject={handleOnChangeSubject} 
      handleOnChangeSelectReason={handleOnChangeSelectReason}
      handleOnChangeReasonText={handleOnChangeReasonText}
    />
  </main>

export default Confession;