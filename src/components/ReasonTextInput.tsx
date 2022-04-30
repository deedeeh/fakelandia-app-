import {FormEvent} from 'react';

interface ReasonTextProps {
  reasonText: string;
  handleOnChangeReasonText: (e: FormEvent<HTMLTextAreaElement>) => void;
}

const ReasonTextInput: React.FC<ReasonTextProps> = ({ reasonText, handleOnChangeReasonText }) => {
  return (
    <div>
      <textarea value={reasonText} onChange={handleOnChangeReasonText} />
    </div>
  )
}

export default ReasonTextInput;