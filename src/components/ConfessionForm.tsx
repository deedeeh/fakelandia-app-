import React, { useContext } from 'react';
import { ConfessionProps } from './Confession';
import { ReasonTextContext, SelectedReasonContext, SubjectContext } from './Router';
import SubjectInput from './SubjectInput';
import ReasonSelect from './ReasonSelect';
import ReasonTextInput from './ReasonTextInput';

const ConfessionForm: React.FC<ConfessionProps> = ({ handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText }) => {
  const subject = useContext(SubjectContext);
  const selectedReason = useContext(SelectedReasonContext);
  const reasonText = useContext(ReasonTextContext);

  return(
    <div className='content-container'>
      <form>
        <SubjectInput 
          subject={subject} 
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
        <button type='submit' disabled>Confess</button>
      </form>
    </div>
  )
}

export default ConfessionForm;