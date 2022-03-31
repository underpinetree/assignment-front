import { Button, Card, Input, Pagination, Result, Row, Spin } from 'antd';
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
  const { Search } = Input;
  const [users, setUsers] = useState<Users>();
  const [error, setError] = useState();
  const pageSize = 15;
  const [current, setCurrent] = useState<number>(1);
  const [minIndex, setMinIndex] = useState<number>(0);
  const [maxIndex, setMaxIndex] = useState<number>(pageSize);
  const handleChange = (page: number) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };
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

  const onClick = () => {
    const generateUsers = async () => {
      await axios
        .post('/api/v1/import')
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    };
    generateUsers();
  };

  const onSearch = (value: string) => {
    const getUsersBySearch = async (name: string) => {
      const response = await axios.get('/api/v1/users', { params: { name: name } }).catch((err) => {
        setError(err.response);
      });
      if (response && response.data) {
        setUsers(response.data);
        setError(undefined);
      }
    };
    getUsersBySearch(value);
  };
  return (
    <DashboardLayout title={t('kuehne nagel')} path="home">
      {users && (
        <Card className={styles.tableCard}>
          <div className={styles.title}>{t('Users')}</div>
          <Search
            placeholder="Input name"
            onSearch={onSearch}
            style={{ width: 400, marginBottom: 10 }}
          />
          <div className={styles.content}>
            <Row gutter={[20, 20]} wrap={true}>
              {error && !users && (
                <Result status="500" title="500" subTitle="Sorry, something went wrong." />
              )}
              {users && <UserList users={users?.users} maxIndex={maxIndex} minIndex={minIndex} />}
            </Row>
          </div>
          <div className={styles.pagination}>
            <Pagination
              pageSize={pageSize}
              current={current}
              total={users?.users.length}
              onChange={handleChange}
            />
          </div>
        </Card>
      )}
      {!users && !error && <Spin />}
      {users?.users.length == 0 && (
        <Button type="primary" onClick={onClick}>
          Generate data
        </Button>
      )}
    </DashboardLayout>
  );
};
export default HomePage;
