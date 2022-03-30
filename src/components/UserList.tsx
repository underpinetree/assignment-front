import { Col } from 'antd';
import React from 'react';
import { User } from '../models/User';
import UserListItem from './UserListItem';
type Props = {
  users?: User[];
};

const UserList = ({ users }: Props) => {
  return (
    <>
      {users &&
        users?.map((user) => {
          return (
            <Col key={user.id}>
              <UserListItem user={user} />
            </Col>
          );
        })}
    </>
  );
};
export default UserList;
