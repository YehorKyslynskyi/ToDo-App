import React from 'react'
import cx from 'classnames'
import styles from './input.module.scss'

const Input = ({
  placeholder,
  className,
  children,
  label,
  register,
  validations,
  pattern,
  error,
  type,
  name,
  dot,
  ...props
}) => (
  <>
    <label className={cx(styles.label, className)} htmlFor={label}>
      <div className={dot} />
      <input
        id={label}
        type={type}
        {...register(name, validations)}
        {...props}
        autoComplete="off"
        placeholder={placeholder}
      />
      {label}
    </label>
    <div className={styles.error}>{error}</div>
  </>
)

export default Input
