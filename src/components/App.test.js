import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('learn react', {exact: false});
    expect(linkElement).toBeInTheDocument();
  });
})
