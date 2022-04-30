import React, { useContext, useState, ChangeEvent } from 'react';
import { ReasonTextContext, SelectedReasonContext, SubjectContext } from './Router';
import SubjectInput from './SubjectInput';
import ReasonSelect from './ReasonSelect';
import ReasonTextInput from './ReasonTextInput';

interface ConfessionFormProps {
  isDisabled: boolean;
  handleOnChangeSubject: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeSelectReason: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeReasonText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ConfessionForm: React.FC<ConfessionFormProps> = ({ isDisabled, handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText }) => {
  const [ disabledButton, setDisabledButton ] = useState<boolean>(isDisabled);

  const subject = useContext(SubjectContext);
  const selectedReason = useContext(SelectedReasonContext);
  const reasonText = useContext(ReasonTextContext);

  const isTouched: boolean = false;

  const disabledButtonValidation = () => {
    if(subject.length >= 3 && subject.length <= 50) setDisabledButton(false);
  }

  return(
    <div className='content-container'>
      <form>
        <SubjectInput 
          subject={subject} 
          isTouched={isTouched}
          handleOnChangeSubject={handleOnChangeSubject} 
        />
        <ReasonSelect 
          selectedReason={selectedReason}
          handleOnChangeSelectReason={handleOnChangeSelectReason}
        />
        <ReasonTextInput 
          reasonText={reasonText}
          handleOnChangeReasonText={handleOnChangeReasonText}
        />
        <button type='submit' disabled={disabledButton}>Confess</button>
      </form>
    </div>
  )
}

export default ConfessionForm;