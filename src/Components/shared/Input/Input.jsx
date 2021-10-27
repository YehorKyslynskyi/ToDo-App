import React from 'react'
import styles from './input.module.scss'

const Input = ({ children, label, register, type, ...props }) => (
  <div className={styles.inputContainer}>
    <input
      id={label}
      type={type}
      className={styles.input}
      {...register(label)}
      {...props}
    />
    <label htmlFor={label}>{children}</label>
  </div>
)

export default Input
