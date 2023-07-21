import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogInSignUp from './LogInSignUp';

describe('<LogInSignUp />', () => {
  test('it should mount', () => {
    render(<LogInSignUp />);
    
    const logInSignUp = screen.getByTestId('LogInSignUp');

    expect(logInSignUp).toBeInTheDocument();
  });
});