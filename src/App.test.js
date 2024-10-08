import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

test("Heading renders successfully", () => {
  render(<BookingForm/>)

  const element = screen.getByText(/Number of Guests/)
  expect(element).toBeIntheDocument();
});
