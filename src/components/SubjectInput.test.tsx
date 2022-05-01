import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SubjectInput from './SubjectInput';

const mockChange = jest.fn();

describe('<SubjectInput />', () => {
  test('renders SubjectInput component', () => {
    const subjectProps = {
      subject: 'Confession',
      isTouched: true,
      handleOnChangeSubject: mockChange
    }
    render(<SubjectInput {...subjectProps} />); 
    const subjectInput = screen.getByLabelText(/^Subject:$/);
    expect(subjectInput).toBeInTheDocument();
  });

  test('displays the passed subject prop value', () => {
    const subjectProps = {
      subject: 'Confession',
      isTouched: true,
      handleOnChangeSubject: mockChange
    }
    render(<SubjectInput {...subjectProps} />); 
    const subjectInput = screen.getByLabelText(/^Subject:$/);
    expect(subjectInput).toHaveValue('Confession');
  });

  test('calls the onChange function when user types', () => {
    const subjectProps = {
      subject: '',
      isTouched: true,
      handleOnChangeSubject: mockChange
    }
    render(<SubjectInput {...subjectProps} />); 
    const subjectInput = screen.getByLabelText(/^Subject:$/);
    const onChangeProp = subjectProps.handleOnChangeSubject;
    subjectInput.onchange = onChangeProp;
    userEvent.type(subjectInput, 'Confession');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(10);
  });

  test('returns a valid subject input of characters length.', () => {
    const subjectProps = {
      subject: 'Confession',
      isTouched: true,
      handleOnChangeSubject: mockChange
    }
    render(<SubjectInput {...subjectProps} />); 
    const subjectInputError = screen.queryByText(/Subject must be between 3 and 50 characters./);
    expect(subjectInputError).not.toBeInTheDocument();
  });

  test('returns a valid subject input of just letters', () => {
    const subjectProps = {
      subject: 'Confession',
      isTouched: true,
      handleOnChangeSubject: mockChange
    }
    render(<SubjectInput {...subjectProps} />); 
    const subjectInputError = screen.queryByText(/Subject must include just letters. No numbers or special characters./);
    expect(subjectInputError).not.toBeInTheDocument();
  });

  test('returns an invalid subject of characters less than 3 or more than 50', () => {
    const subjectProps = {
      subject: 'Co',
      isTouched: true,
      handleOnChangeSubject: mockChange
    }
    render(<SubjectInput {...subjectProps} />); 
    const subjectInputError = screen.queryByText(/Subject must be between 3 and 50 characters./);
    expect(subjectInputError).toBeInTheDocument();
  });

  test('returns an invalid subject of numbers or special characters', () => {
    const subjectProps = {
      subject: 'Confession 1',
      isTouched: true,
      handleOnChangeSubject: mockChange
    }
    render(<SubjectInput {...subjectProps} />); 
    const subjectInputError = screen.queryByText(/Subject must include just letters. No numbers or special characters./);
    expect(subjectInputError).toBeInTheDocument();
  });
})