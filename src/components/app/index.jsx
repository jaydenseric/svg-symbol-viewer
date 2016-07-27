import React from 'react'
import Header from '../header'
import Tool from '../tool'
import styles from './styles.postcss'

const App = () => (
  <div className={styles.app}>
    <Header />
    <Tool />
  </div>
)

export default App
