import React from 'react'
import Checkbox from '../../../../shared/Checkbox/Checkbox'
import styles from './taskItem.module.scss'

const TaskItem = ({ task, onDoneClick }) => (
  <div className={styles.taskItem}>
    <div className={styles.taskBodyContainer}>
      <div className={styles.title}>{task.title}</div>
      <div className={styles.message}>{task.message}</div>
      <Checkbox
        className={styles.checkbox}
        label="Done"
        value={task.isDone}
        onChange={(e) => onDoneClick(task.id, e.target.checked)}
      />
    </div>
    <div className={styles.dateAndTypeContainer}>
      <div className={styles.date}>{task.date.toDateString()}</div>
      <div className={styles.type}>{task.type}</div>
    </div>
  </div>
)

export default TaskItem
