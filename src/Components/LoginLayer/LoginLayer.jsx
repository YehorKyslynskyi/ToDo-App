import React from 'react'
import styles from './loginLayer.module.scss'

const LoginLayer = ({ children }) => (
  <div className={styles.loginLayer}>
    <div className={styles.loginForm}>
      <header>To Do App</header>
      {children}
    </div>
  </div>
)

export default LoginLayer
