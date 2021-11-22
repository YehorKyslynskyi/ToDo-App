import React, { useState } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../store/user/actions'
/* import API from '../../../API/userAuth' */
import {
  emailValidations,
  passwordValidations,
} from '../../../utils/validations'
import Button from '../../shared/Button'
import Input from '../../shared/Input'
import styles from './loginForm.module.scss'

const LoginForm = () => {
  const [isActiveError, setIsActiveError] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm([])

  const onSubmit = (data) => {
    try {
      dispatch(
        loginUser(data, () => {
          history.push('/home')
        }),
      )
    } catch (e) {
      setIsActiveError(true)
    }
  }

  /*  console.log(errors) */
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.input}
        type="text"
        register={register}
        validations={emailValidations}
        placeholder="Login"
        error={errors?.email?.message}
        name="email"
      />
      <Input
        className={styles.input}
        type="text"
        register={register}
        validations={passwordValidations}
        placeholder="Password"
        error={errors?.password?.message}
        name="password"
      />
      <Button className={styles.button} type="submit">
        Sign In
      </Button>
      <div
        className={cx(styles.error, { [styles.activeError]: isActiveError })}
      >
        Incorrect Email !
      </div>
    </form>
  )
}

export default LoginForm
