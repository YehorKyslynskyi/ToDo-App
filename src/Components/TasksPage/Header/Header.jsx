import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../shared/Button'
import styles from './header.module.scss'
import TaskCounter from './TaskCounter/TaskCounter'

const Header = () => {
  const user = useSelector((state) => state.user.user)

  const tasks = useSelector((state) => state.tasks.tasks)
  const businessTasksCount = useMemo(
    () => tasks.filter((task) => task.type === 'Business').length || 0,
    [tasks],
  )

  const personalTasksCount = useMemo(
    () => tasks.filter((task) => task.type === 'Personal').length || 0,
    [tasks],
  )

  const date = new Date()

  const onLogOut = () => {
    localStorage.removeItem('token')
    document.location.reload()
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menuAndButtons}>
          <div className={styles.icon}>
            <span />
          </div>
          <Button onClick={onLogOut} className={styles.button}>
            Log Out
          </Button>
        </div>
        <div className={styles.titleAndTaskCounters}>
          <div className={styles.title}>Hello {user.first_name}</div>
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
