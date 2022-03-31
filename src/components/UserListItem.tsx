import React from 'react';
import { Avatar, Card } from 'antd';
import { User } from '../models/User';
import Meta from 'antd/lib/card/Meta';

type Props = {
  user?: User;
};

const UserListItem = ({ user }: Props) => {
  return (
    <>
      <Card hoverable style={{ width: 300 }}>
        <Meta title={user?.name} avatar={<Avatar size={45} src={user?.url} />} />
      </Card>
    </>
  );
};
export default UserListItem;
