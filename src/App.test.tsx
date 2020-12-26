import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
