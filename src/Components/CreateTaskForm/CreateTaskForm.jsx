import React from 'react'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import styles from './createTaskForm.module.scss'

const CreateTaskForm = ({ register, handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Input type="text" register={register} label="title" name="title" />
    <Input type="text" register={register} label="message" name="message" />
    <Input
      type="radio"
      register={register}
      label="type"
      name="business"
      value="business"
    >
      Business Task
    </Input>
    <Input
      type="radio"
      register={register}
      label="type"
      name="personal"
      value="personal"
    >
      Personal Task
    </Input>
    <Button className={styles.button} type="submit">
      Add
    </Button>
  </form>
)

export default CreateTaskForm
