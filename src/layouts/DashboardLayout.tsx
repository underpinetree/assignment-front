import React from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import { Link } from 'react-router-dom';
import styles from './DashboardLayout.less';
import Logo from '../components/Logo';

enum routePaths {
  home = 'home',
}

type Props = {
  children?: React.ReactNode;
  path?: string;
  title?: string | JSX.Element;
};

const DashboardLayout = ({ children, path, title }: Props) => {
  return (
    <>
      <Layout className={styles.layout}>
        <Layout.Sider className={styles.sider}>
          <Menu defaultSelectedKeys={[routePaths.home]} className={styles.menu}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <Menu.Item
              key={routePaths.home}
              className={path === routePaths.home ? styles.menuLinkActive : styles.menuLinkInactive}
            >
              <Link to="/home">Home</Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Content className={styles.content}>
            <PageHeader title={title} className={styles.pageHeader}></PageHeader>
            <>{children}</>
          </Layout.Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
