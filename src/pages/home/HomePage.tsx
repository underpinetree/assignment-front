import { Card, Result, Row, Spin } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import UserList from '../../components/UserList';
import DashboardLayout from '../../layouts/DashboardLayout';
import { User } from '../../models/User';
import styles from './HomePage.less';

type Users = {
  users: User[];
};

const HomePage = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<Users>();
  const [error, setError] = useState();
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/api/v1/users').catch((err) => {
        console.error(err);
        setError(err.response);
      });
      if (response && response.data) {
        setUsers(response.data);
        setError(undefined);
      }
    };
    getUser();
  }, []);
  return (
    <DashboardLayout title={t('kuehne nagel')} path="home">
      <Card className={styles.tableCard}>
        <div className={styles.title}>{t('Users')}</div>
        <div className={styles.content}>
          <Row gutter={[20, 20]} wrap={true}>
            {error && !users && (
              <Result status="500" title="500" subTitle="Sorry, something went wrong." />
            )}
            {!users && !error && <Spin />}
            {users && <UserList users={users?.users} />}
          </Row>
        </div>
      </Card>
    </DashboardLayout>
  );
};
export default HomePage;
