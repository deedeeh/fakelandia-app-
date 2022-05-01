import {render, screen} from '@testing-library/react';
import ConfessionForm from "./ConfessionForm";

const mockChange = jest.fn;

describe('<ConfessionForm />', () => {
  test('renders ConfessionForm component', () => {
    const formProps = {
      disabledButton: true,
      handleOnChangeSubject: mockChange,
      handleOnChangeSelectReason: mockChange,
      handleOnChangeReasonText: mockChange,
      handleOnSubmit: mockChange
    }
    render(<ConfessionForm {...formProps} />)
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Confess');
  });

  test('Disable button when there are invalid inputs.', () => {
    const formProps = {
      disabledButton: true,
      handleOnChangeSubject: mockChange,
      handleOnChangeSelectReason: mockChange,
      handleOnChangeReasonText: mockChange,
      handleOnSubmit: mockChange
    }
    render(<ConfessionForm {...formProps} />)
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  test('Enable button when there are valid inputs.', () => {
    const formProps = {
      disabledButton: false,
      handleOnChangeSubject: mockChange,
      handleOnChangeSelectReason: mockChange,
      handleOnChangeReasonText: mockChange,
      handleOnSubmit: mockChange
    }
    render(<ConfessionForm {...formProps} />)
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toBeDisabled();
  });
})