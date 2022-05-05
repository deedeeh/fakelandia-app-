import React, { ChangeEvent, FormEvent } from 'react';
import '../styles/confession.css';
import ConfessionForm from './ConfessionForm';
import ThankYou from './ThankYou';

export interface ConfessionProps {
  disabledButton: boolean;
  formSubmission: boolean;
  confessionCitizenId: number;
  handleOnChangeSubject: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeSelectReason: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeReasonText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Confession: React.FC<ConfessionProps> = ({ disabledButton, formSubmission, confessionCitizenId, handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText, handleOnSubmit }) => {
  return (
    <main className='content-container'>
      {!formSubmission && (
      <>
        <p className='conf-paragraph'>It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</p>
        <p className='conf-paragraph'>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
        <ConfessionForm 
          disabledButton={disabledButton}
          handleOnChangeSubject={handleOnChangeSubject} 
          handleOnChangeSelectReason={handleOnChangeSelectReason}
          handleOnChangeReasonText={handleOnChangeReasonText}
          handleOnSubmit={handleOnSubmit}
        />
      </>
      )}
      {formSubmission && (
        <ThankYou confessionCitizenId={confessionCitizenId}/>
      )}
    </main>
  )
}

export default Confession;