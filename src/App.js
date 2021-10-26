import React from 'react'
import styles from './App.module.scss'
import Header from './Components/Header/Header'

function App() {
  return (
    <div className={styles.App}>
      <header>
        <Header />
      </header>
    </div>
  )
}

export default App
