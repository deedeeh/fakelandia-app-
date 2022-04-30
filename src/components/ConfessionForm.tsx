import React, { useContext, ChangeEvent } from 'react';
import { DisabledButtonContext, ReasonTextContext, SelectedReasonContext, SubjectContext } from './Router';
import SubjectInput from './SubjectInput';
import ReasonSelect from './ReasonSelect';
import ReasonTextInput from './ReasonTextInput';

interface ConfessionFormProps {
  handleOnChangeSubject: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeSelectReason: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeReasonText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ConfessionForm: React.FC<ConfessionFormProps> = ({ handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText }) => {
  const subject = useContext(SubjectContext);
  const selectedReason = useContext(SelectedReasonContext);
  const reasonText = useContext(ReasonTextContext);
  const disabledButton = useContext(DisabledButtonContext);

  const isTouched: boolean = false;

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
          isTouched={isTouched}
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