import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../shared/Button'
import Input from '../../shared/Input'
import styles from './loginForm.module.scss'

const LoginForm = () => {
  const { register, handleSubmit } = useForm([])

  const onSubmit = () => {
    console.log('Submit!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        className={styles.input}
        type="text"
        register={register}
        placeholder="Login"
        name="login"
      />
      <Input
        className={styles.input}
        type="text"
        register={register}
        placeholder="Password"
        name="password"
      />
      <Button className={styles.button} type="submit">
        Sign In
      </Button>
    </form>
  )
}

export default LoginForm
