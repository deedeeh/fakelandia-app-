import {ChangeEvent, useState, useCallback, useEffect} from 'react';
import ErrorMessage from './ErrorMessage';

interface ReasonSelectProps {
  selectedReason: string;
  isTouched: boolean;
  handleOnChangeSelectReason: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ReasonSelect: React.FC<ReasonSelectProps> = ({ selectedReason, isTouched, handleOnChangeSelectReason }) => {
  const [ errorMessage, setErrorMessage ] = useState<string>('');
  const [ touched, setTouched ] = useState<boolean>(isTouched);

  const validate: (input: string) => string = useCallback(input => {
    if(!touched) return '';
    if(input === 'select') {
      return 'Please select one of the options.'
    } else {
      return '';
    }
  }, [touched]); 

  useEffect(() => setErrorMessage(validate(selectedReason)), [validate, selectedReason]);

  return (
    <>
      <div>
        <label>
          Reason for contact:
          <select 
            value={selectedReason} 
            name='reason' 
            id='reason' 
            onChange={(e) => {
              setTouched(true);
              const errorMessage = validate(e.target.value);
              setErrorMessage(errorMessage)
              handleOnChangeSelectReason(e);
            }}
          >
            <option value='select'>Select</option>
            <option value='lift'>Lift</option>
            <option value='vegetables'>Vegetables</option>
            <option value='rudeness'>Rudeness</option>
            <option value='united'>United</option>
            <option value='talk'>I just want to talk</option>
          </select>
        </label>
      </div>
      <ErrorMessage message={errorMessage}/>
    </>
  )
}

export default ReasonSelect;