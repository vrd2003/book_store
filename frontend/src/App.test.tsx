import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the bookshop brand', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /leaf & letter/i });
  expect(linkElement).toBeInTheDocument();
});
