import React from 'react'
import styles from './header.module.scss'
import TaskCounter from './TaskCounter/TaskCounter'

const Header = () => (
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
          <TaskCounter count={26} description="Personal" />
          <TaskCounter count={10} description="Business" />
        </div>
      </div>
      <div className={styles.dateAndProgress}>
        <div className={styles.date}>Oct 26, 2021</div>
      </div>
    </div>
  </div>
)

export default Header
