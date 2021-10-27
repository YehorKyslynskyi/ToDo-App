import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import CreateTaskForm from '../CreateTaskForm/CreateTaskForm'

import styles from './tasks.module.scss'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const { register, handleSubmit } = useForm([])
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

  console.log(tasks)
  return (
    <div className={styles.tasks}>
      <div className={styles.container}>
        <CreateTaskForm
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default Tasks
