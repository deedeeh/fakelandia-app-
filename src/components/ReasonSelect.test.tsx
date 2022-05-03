import { fireEvent, render, screen } from '@testing-library/react';
import ReasonSelect from './ReasonSelect';

const mockChange = jest.fn();

describe('<ReasonSelect />', () => {
  test('renders ReasonSelect component', () => {
    const reasonSelectProps = {
      selectedReason: 'lift',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeSelectReason: mockChange
    }
    render(<ReasonSelect {...reasonSelectProps} />); 
    const reasonSelect = screen.getByLabelText(/^Reason for contact:$/);
    expect(reasonSelect).toBeInTheDocument();
  });

  test('displays the passed selectedReason prop value', () => {
    const reasonSelectProps = {
      selectedReason: 'lift',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeSelectReason: mockChange
    }
    render(<ReasonSelect {...reasonSelectProps} />); 
    const reasonSelect = screen.getByLabelText(/^Reason for contact:$/);
    expect(reasonSelect).toHaveValue('lift');
  });

  test('calls the onChange function when user select an otpion', () => {
    const reasonSelectProps = {
      selectedReason: 'lift',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeSelectReason: mockChange
    }
    render(<ReasonSelect {...reasonSelectProps} />); 
    const reasonSelect = screen.getByLabelText(/^Reason for contact:$/);
    fireEvent.change(reasonSelect, {target: {value: 'lift'}});
    expect(reasonSelectProps.handleOnChangeSelectReason).toHaveBeenCalled();
    expect(reasonSelectProps.handleOnChangeSelectReason).toHaveBeenCalledTimes(1);
  });

  test('returns a valid selected reason which is not Select option', () => {
    const reasonSelectProps = {
      selectedReason: 'lift',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeSelectReason: mockChange
    }
    render(<ReasonSelect {...reasonSelectProps} />); 
    const reasonSelectError = screen.queryByText(/Please select one of the options./);
    expect(reasonSelectError).not.toBeInTheDocument();
  });

  test('returns an invalid selected reason of option Select', () => {
    const reasonSelectProps = {
      selectedReason: 'select',
      isTouched: true,
      showErrorMessage: true,
      handleOnChangeSelectReason: mockChange
    }
    render(<ReasonSelect {...reasonSelectProps} />); 
    const reasonSelectError = screen.queryByText(/Please select one of the options./);
    expect(reasonSelectError).toBeInTheDocument();
  });
})