import React from 'react'
import cx from 'classnames'
import styles from './button.module.scss'

const Button = ({ children, className, ...props }) => (
  <button type="button" className={cx(styles.button, className)} {...props}>
    {children}
  </button>
)

export default Button
