import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import cx from 'classnames'
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm'
import Button from '../shared/Button/Button'

import styles from './tasks.module.scss'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const { register, handleSubmit } = useForm([])
  const [isActiveForm, setIsActiveForm] = useState(false)
  const onSubmit = (data) => {
    const newTask = {
      ...data,
      date: new Date(),
      isDone: false,
    }
    if (tasks !== null) {
      setTasks([...tasks, newTask])
    } else {
      setTasks(newTask)
    }
  }
  const handleActiveForm = () => {
    setIsActiveForm((prevValue) => !prevValue)
    console.log(isActiveForm)
  }

  console.log(tasks)

  return (
    <div className={styles.tasks}>
      <div className={styles.container}>
        <CreateTaskForm
          className={cx({ [styles.activeForm]: isActiveForm })}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <Button
          onClick={handleActiveForm}
          className={cx(styles.plusBtn, { [styles.activeBtn]: isActiveForm })}
          type="button"
        >
          <span>+</span>
        </Button>
      </div>
    </div>
  )
}

export default Tasks
