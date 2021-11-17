import React, { useState } from 'react'
import cx from 'classnames'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../../store/user/actions'
import API from '../../../API/userAuth'
import {
  emailValidations,
  passwordValidations,
} from '../../../utils/validations'
import Button from '../../shared/Button'
import Input from '../../shared/Input'
import styles from './loginForm.module.scss'

const LoginForm = () => {
  const [isActiveError, setIsActiveError] = useState(false)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm([])

  const onSubmit = async (data) => {
    try {
      const loginResponse = await API.login(data)
      const userResponse = await API.getUser()
      localStorage.setItem('token', loginResponse.data.token)
      const newUser = {
        ...userResponse.data.data,
        token: localStorage.getItem('token'),
      }
      dispatch(addUser(newUser))
    } catch (e) {
      console.log('ERROR !', e)
      setIsActiveError(true)
    } finally {
      console.log(user)
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
