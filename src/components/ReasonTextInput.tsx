import {ChangeEvent, useCallback, useEffect, useState} from 'react';
import ErrorMessage from './ErrorMessage';

interface ReasonTextProps {
  reasonText: string;
  isTouched: boolean;
  handleOnChangeReasonText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonTextInput: React.FC<ReasonTextProps> = ({ reasonText, isTouched, handleOnChangeReasonText }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);

  const validate: (input: string) => string = useCallback(input => {
    if(!touched) return '';
    if(input.length < 18 || input.length > 150) {
      return 'Reason must be between 18 and 150 characters';
    } else {
      return '';
    }
  }, [touched])

  useEffect(() => setErrorMessage(validate(reasonText)), [validate, reasonText]);

  return (
    <>
      <div>
        <textarea 
          value={reasonText} 
          onChange={(e) => {
            setTouched(true);
            const errorMessage = validate(e.target.value)
            setErrorMessage(errorMessage)
            handleOnChangeReasonText(e)
          }} />
      </div>
      <ErrorMessage message={errorMessage} />
    </>
  )
}

export default ReasonTextInput;