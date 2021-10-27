import React from 'react'
import styles from './input.module.scss'

const Input = ({ children, label, register, type, name, ...props }) => (
  <div className={styles.inputContainer}>
    <input
      id={name}
      type={type}
      className={styles.input}
      {...register(label)}
      {...props}
    />
    <label htmlFor={name}>{children}</label>
  </div>
)

export default Input
