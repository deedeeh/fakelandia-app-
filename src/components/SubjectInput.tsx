import React, {FormEvent} from 'react';

interface SubjectProps {
  subject: string;
  handleOnChangeSubject: (e: FormEvent<HTMLInputElement>) => void;
}

const SubjectInput: React.FC<SubjectProps> = ({ subject, handleOnChangeSubject}) => {
  return (
    <div>
      <label id='subject'>
        Subject:
        <input required type='text' value={subject} onChange={handleOnChangeSubject} />
      </label>
    </div>
  )
}

export default SubjectInput;