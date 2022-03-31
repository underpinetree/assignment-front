import { Col } from 'antd';
import React from 'react';
import { User } from '../models/User';
import UserListItem from './UserListItem';

type Props = {
  users?: User[];
  minIndex: number;
  maxIndex: number;
};

const UserList = ({ users, minIndex, maxIndex }: Props) => {
  return (
    <>
      {users &&
        users?.map((user, index) => {
          if (index >= minIndex && index < maxIndex) {
            return (
              <Col key={user.id}>
                <UserListItem user={user} />
              </Col>
            );
          }
        })}
    </>
  );
};
export default UserList;
