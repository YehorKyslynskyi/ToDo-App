import React from 'react'
import Header from './Header'
import Tasks from './Tasks'
import styles from './tasksPage.module.scss'

const TasksPage = () => (
  <div className={styles.tasksPage}>
    <header>
      <Header />
    </header>
    <main>
      <Tasks />
    </main>
  </div>
)
export default TasksPage
