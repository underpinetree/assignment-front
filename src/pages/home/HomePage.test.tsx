import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import '../../i18n';

it('renders without crash', () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  );
});
