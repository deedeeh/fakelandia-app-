import { Misdemeanour } from '../generate_misdemeanours';

interface SubmittedData {
  subject: string;
  selectedReason: Misdemeanour;
  reasonText: string;
}

export default SubmittedData;