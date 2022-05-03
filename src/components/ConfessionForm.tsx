import React, { useContext, ChangeEvent, FormEvent } from 'react';
import { ReasonTextContext, SelectedReasonContext, ShowErrorMessageContext, SubjectContext } from './ReactContext';
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
  const showErrorMessage = useContext(ShowErrorMessageContext);

  const isTouched: boolean = false;

  return(
    <div className='form-container'>
      <form className='form' onSubmit={handleOnSubmit}>
        <SubjectInput 
          subject={subject} 
          isTouched={isTouched}
          showErrorMessage={showErrorMessage}
          handleOnChangeSubject={handleOnChangeSubject} 
        />
        <ReasonSelect 
          selectedReason={selectedReason}
          isTouched={isTouched}
          showErrorMessage={showErrorMessage}
          handleOnChangeSelectReason={handleOnChangeSelectReason}
        />
        <ReasonTextInput 
          reasonText={reasonText}
          isTouched={isTouched}
          showErrorMessage={showErrorMessage}
          handleOnChangeReasonText={handleOnChangeReasonText}
        />
        <button className='form__button' type='submit' disabled={disabledButton}>Confess</button>
      </form>
    </div>
  )
}

export default ConfessionForm;