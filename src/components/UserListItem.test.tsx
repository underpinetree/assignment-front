import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '../i18n';
import UserListItem from './UserListItem';
import { User } from '../models/User';

const user: User = {
  id: 1,
  name: 'Joseph Joestar',
  url: 'https://wallpaperboys.com/1392_744_jojo_16',
};

it('renders without crash', () => {
  render(
    <BrowserRouter>
      <UserListItem user={user} />
    </BrowserRouter>,
  );

  const name = screen.getByText(`${user.name}`);
  const icon = screen.getByRole('img');
  expect(name).toBeTruthy();
  expect(icon).toHaveAttribute('src', `${user.url}`);
});
