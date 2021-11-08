import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import styles from './header.module.scss'
import TaskCounter from './TaskCounter/TaskCounter'

const Header = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  const a = 0
  const businessTasksCount = useMemo(
    () => tasks.filter((task) => task.type === 'Business').length || 0,
    [tasks],
  )

  const personalTasksCount = useMemo(
    () => tasks.filter((task) => task.type === 'Personal').length || 0,
    [tasks],
  )

  const date = new Date()

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menuAndButtons}>
          <div className={styles.icon}>
            <span />
          </div>
        </div>
        <div className={styles.titleAndTaskCounters}>
          <div className={styles.title}>Your Things</div>
          <div className={styles.tasksContainer}>
            <TaskCounter count={personalTasksCount} description="Personal" />
            <TaskCounter count={businessTasksCount} description="Business" />
          </div>
        </div>
        <div className={styles.dateAndProgress}>
          <div className={styles.date}>{date.toDateString()}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
