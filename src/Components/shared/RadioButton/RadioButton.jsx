import React from 'react'
import cx from 'classnames'
import styles from './radioButton.module.scss'

const RadioButton = ({
  label,
  register,
  value,
  onChange,
  isActive,
  validations,
}) => {
  const inputRegister = register('type', validations)

  return (
    <label
      className={cx(styles.label, { [styles.activeRadioBtn]: isActive })}
      htmlFor={value}
    >
      <div className={styles.dot} />
      <input
        onChange={(e) => {
          inputRegister.onChange(e)
          onChange(e)
        }}
        ref={inputRegister.ref}
        onBlur={inputRegister.onBlur}
        name={inputRegister.name}
        id={value}
        type="radio"
        value={value}
      />
      {label}
    </label>
  )
}

export default RadioButton
