/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import cx from 'classnames'
import styles from './checkbox.module.scss'

const Checkbox = ({ label, value, onChange, className }) => (
  <label
    className={cx(styles.checkbox, className, { [styles.checked]: value })}
  >
    <div className={styles.dot} />
    <input type="checkbox" checked={value} onChange={onChange} />
    {label}
  </label>
)

export default Checkbox
