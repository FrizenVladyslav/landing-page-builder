import React from 'react'
import { Layout, Button, Avatar } from 'antd'
import { LayoutFilled, LoginOutlined, UserAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

function Header() {
  return (
    <Layout.Header>
      <div className={styles.header}>
        <span>
          <Link to="/">
            <LayoutFilled /> Rewired page builder
          </Link>
        </span>
        {false ? (
          <div className={styles.user}>
            <Avatar icon={<UserAddOutlined />} className={styles.avatar} />
            ,&nbsp;
            <span className={styles.signOut}>sign out</span>.
          </div>
        ) : (
          <Link to="/login">
            <Button type="primary" icon={<LoginOutlined />}>
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </Layout.Header>
  )
}

export default Header
