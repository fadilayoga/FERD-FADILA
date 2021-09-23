import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders halaman home dengan benar', () => {
  render(<App />);

  const title = screen.getByText(/why do we need test ?/i);
  expect(title).toBeInTheDocument();

  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent('User List')

  fireEvent.click(btn)

  const btn2 = screen.getByRole('button')
  expect(btn2).toBeInTheDocument();
  expect(btn2).toHaveTextContent('Back to Home');
});
