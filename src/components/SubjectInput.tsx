import React, { ChangeEvent, useEffect, useState, useCallback } from 'react';
import ErrorMessage from './ErrorMessage';

interface SubjectProps {
  subject: string;
  isTouched: boolean;
  showErrorMessage: boolean;
  handleOnChangeSubject: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SubjectInput: React.FC<SubjectProps> = ({ subject, isTouched, showErrorMessage, handleOnChangeSubject }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);


  const validate: (input: string) => string = useCallback((input) => {
  if(!touched) return '';
  if(input.length < 3 || input.length > 50) {
    return 'Subject must be between 3 and 50 characters.';
  } else if(!/^[a-zA-Z]+$/.test(input)) {
    return 'Subject must include just letters. No numbers or special characters.'
  } else {
    return '';
  }}, [touched]);

  useEffect(() => setErrorMessage(validate(subject)), [validate, subject]);

  return (
    <>
      <div className='form__element'>
        <label htmlFor='subject'>
          Subject:
        </label>
        &nbsp;
        <input 
          id='subject'
          className='form__input--bigger'
          type='text' 
          value={subject} 
          onChange={(e) => {
            setTouched(true);
            const errorMessage = validate(e.target.value);
            setErrorMessage(errorMessage)
            handleOnChangeSubject(e)
          }} 
        />
      </div>
      {showErrorMessage && touched && (
        <ErrorMessage message={errorMessage}/>
      )} 
    </>
  )
}

export default SubjectInput;