import {FormEvent} from 'react';

interface ReasonSelectProps {
  selectedReason: string;
  handleOnChangeSelectReason: (e: FormEvent<HTMLSelectElement>) => void;
}

const ReasonSelect: React.FC<ReasonSelectProps> = ({ selectedReason, handleOnChangeSelectReason}) => {
  return (
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
  )
}

export default ReasonSelect;