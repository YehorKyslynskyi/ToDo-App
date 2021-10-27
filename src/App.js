import React from 'react'
import styles from './App.module.scss'
import Header from './Components/Header/Header'
import Tasks from './Components/Tasks/Tasks'

function App() {
  return (
    <div className={styles.App}>
      <header>
        <Header />
      </header>
      <main>
        <Tasks />
      </main>
    </div>
  )
}

export default App
