import React from 'react'
import TaskItem from './TaskItem'
import styles from './tasksList.module.scss'

const TasksList = ({ tasks, onDoneClick, header }) =>
  Array.isArray(tasks) && tasks.length ? (
    <>
      {header && <h3 className={styles.header}>{header}</h3>}

      <div className={styles.tasksList}>
        {tasks.map((task) => (
          <TaskItem onDoneClick={onDoneClick} task={task} key={task.date} />
        ))}
      </div>
    </>
  ) : null

export default TasksList
