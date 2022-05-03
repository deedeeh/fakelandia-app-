import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import ReasonTextInput from './ReasonTextInput';

const mockChange = jest.fn();

describe('<ReasonTextInput />', () => {
  test('renders ReasonSelect component', () => {
    const reasonTextProps = {
      reasonText: 'I wanted to confess long time ago regarding not eating my vegetables!',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeReasonText: mockChange
    }
    render(<ReasonTextInput {...reasonTextProps} />); 
    const reasonTextInput = screen.getByPlaceholderText(/^Please tell us more about your reason for contact.$/);
    expect(reasonTextInput).toBeInTheDocument();
  });

  test('displays the passed reasonText prop value', () => {
    const reasonTextProps = {
      reasonText: 'I wanted to confess long time ago regarding not eating my vegetables!',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeReasonText: mockChange
    }
    render(<ReasonTextInput {...reasonTextProps} />); 
    const reasonTextInput = screen.getByPlaceholderText(/^Please tell us more about your reason for contact.$/);
    expect(reasonTextInput).toHaveValue('I wanted to confess long time ago regarding not eating my vegetables!');
  });

  test('calls the onChange function when user types', () => {
    const reasonTextProps = {
      reasonText: '',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeReasonText: mockChange
    }
    render(<ReasonTextInput {...reasonTextProps} />); 
    const reasonTextInput = screen.getByPlaceholderText(/^Please tell us more about your reason for contact.$/);
    const onChangeProp = reasonTextProps.handleOnChangeReasonText;
    reasonTextInput.onchange = onChangeProp;
    userEvent.type(reasonTextInput, 'I don\'t eat my vegetables.');
    expect(onChangeProp).toHaveBeenCalled();
    expect(onChangeProp).toHaveBeenCalledTimes(26);
  });

  test('returns a valid reason text of characters', () => {
    const reasonTextProps = {
      reasonText: 'I wanted to confess long time ago regarding not eating my vegetables!',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeReasonText: mockChange
    }
    render(<ReasonTextInput {...reasonTextProps} />); 
    const reasonTextError = screen.queryByText(/Reason must be between 18 and 150 characters/);
    expect(reasonTextError).not.toBeInTheDocument();
  });

  test('returns an invalid reason text of characters less than 18 or more than 150', () => {
    const reasonTextProps = {
      reasonText: 'Nothing to say',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeReasonText: mockChange
    }
    render(<ReasonTextInput {...reasonTextProps} />); 
    const reasonTextError = screen.queryByText(/Reason must be between 18 and 150 characters/);
    expect(reasonTextError).toBeInTheDocument();
  });
})