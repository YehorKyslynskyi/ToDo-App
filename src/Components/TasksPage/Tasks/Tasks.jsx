import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import CreateTaskForm from './CreateTaskForm'
import Button from '../../shared/Button/Button'
import TasksList from './TasksList'
import { addTask, setDoneStatus } from '../../../store/tasks/actions'

import styles from './tasks.module.scss'

const Tasks = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.tasks)

  /*  const [tasks, setTasks] = useState([]) */
  const { register, handleSubmit } = useForm([])
  const [isActiveForm, setIsActiveForm] = useState(false)

  const onSubmit = (data) => {
    const newTask = {
      ...data,
      id: nanoid(),
      date: new Date(),
      isDone: false,
    }
    if (tasks !== null) {
      /* setTasks([...tasks, newTask]) */
      dispatch(addTask(newTask))
    } else {
      dispatch()
    }
  }
  const handleActiveForm = () => {
    setIsActiveForm((prevValue) => !prevValue)
  }

  const onDoneClick = (id, checked) => {
    dispatch(setDoneStatus({ id, checked }))
  }

  return (
    <div className={styles.tasks}>
      <div className={styles.container}>
        <Button
          onClick={handleActiveForm}
          className={cx(styles.plusBtn, { [styles.activeBtn]: isActiveForm })}
          type="button"
        >
          <span>+</span>
        </Button>
        <CreateTaskForm
          className={cx({ [styles.activeForm]: isActiveForm })}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
        <TasksList
          header="Your Tasks"
          onDoneClick={onDoneClick}
          tasks={tasks.filter((task) => !task.isDone)}
        />
        <TasksList
          header="Complited Tasks"
          onDoneClick={onDoneClick}
          tasks={tasks.filter((task) => task.isDone)}
        />
      </div>
    </div>
  )
}

export default Tasks
