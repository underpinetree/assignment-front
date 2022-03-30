import React from 'react';
import { Card } from 'antd';
import { User } from '../models/User';
import Meta from 'antd/lib/card/Meta';

type Props = {
  user?: User;
};

const UserListItem = ({ user }: Props) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={`${user?.name}`} src={`${user?.icon}`} />}
      >
        <Meta title={user?.name} />
      </Card>
    </>
  );
};
export default UserListItem;
