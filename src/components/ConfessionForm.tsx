import React, { useContext } from 'react';
import { ConfessionProps } from './Confession';
import { ReasonTextContext, SelectedReasonContext, SubjectContext } from './Router';

const ConfessionForm: React.FC<ConfessionProps> = ({ handleOnChangeSubject, handleOnChangeSelectReason, handleOnChangeReasonText }) => {
  const subject = useContext(SubjectContext);
  const selectedReason = useContext(SelectedReasonContext);
  const reasonText = useContext(ReasonTextContext);

  return(
    <div className='content-container'>
      <form>
        <div>
          <label id='subject'>
            Subject:
            <input type='text' value={subject} onChange={handleOnChangeSubject} />
          </label>
        </div>
        <div>
          <label>
            Reason for contact:
            <select value={selectedReason} name='reason' id='reason' onChange={handleOnChangeSelectReason}>
              <option value='select'>Select</option>
              <option value='lift'>Lift</option>
              <option value='vegetables'>Vegetables</option>
              <option value='rudeness'>Rudeness</option>
              <option value='united'>United</option>
              <option value='talk'>I just want to talk</option>
            </select>
          </label>
        </div>
        <div>
          <textarea value={reasonText} onChange={handleOnChangeReasonText} />
        </div>
        <button type='submit'>Confess</button>
      </form>
    </div>
  )
}

export default ConfessionForm;