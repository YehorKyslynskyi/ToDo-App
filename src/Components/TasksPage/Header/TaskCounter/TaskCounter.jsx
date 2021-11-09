import React from 'react'
import styles from './taskCounter.module.scss'

const TaskCounter = ({ count, description }) => (
  <div className={styles.taskCounter}>
    <div className={styles.count}>{count}</div>
    <div className={styles.description}>{description}</div>
  </div>
)

export default TaskCounter
