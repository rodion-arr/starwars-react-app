import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";

jest.mock('./hooks/useDb');

test('renders welcome', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/people/i);
  expect(linkElement).toBeInTheDocument();
});
