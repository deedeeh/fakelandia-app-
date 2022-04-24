import { render, screen } from '@testing-library/react';
import App from './App';

test('renders fakelandia justice department heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/fakelandia justice department/i);
  expect(headingElement).toBeInTheDocument();
});
