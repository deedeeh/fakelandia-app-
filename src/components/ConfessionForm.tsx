import React, { useContext, ChangeEvent, FormEvent } from 'react';
import { ReasonTextContext, SelectedReasonContext, SubjectContext } from './ReactContext';
import SubjectInput from './SubjectInput';
import ReasonSelect from './ReasonSelect';
import ReasonTextInput from './ReasonTextInput';

interface ConfessionFormProps {
  disabledButton: boolean;
  handleOnChangeSubject: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeSelectReason: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeReasonText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const ConfessionForm: React.FC<ConfessionFormProps> = ({ disabledButton, handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText, handleOnSubmit }) => {
  const subject = useContext(SubjectContext);
  const selectedReason = useContext(SelectedReasonContext);
  const reasonText = useContext(ReasonTextContext);

  const isTouched: boolean = false;

  return(
    <div className='content-container'>
      <form onSubmit={handleOnSubmit}>
        <SubjectInput 
          subject={subject} 
          isTouched={isTouched}
          handleOnChangeSubject={handleOnChangeSubject} 
        />
        <ReasonSelect 
          selectedReason={selectedReason}
          isTouched={isTouched}
          handleOnChangeSelectReason={handleOnChangeSelectReason}
        />
        <ReasonTextInput 
          reasonText={reasonText}
          isTouched={isTouched}
          handleOnChangeReasonText={handleOnChangeReasonText}
        />
        <button type='submit' disabled={disabledButton}>Confess</button>
      </form>
    </div>
  )
}

export default ConfessionForm;