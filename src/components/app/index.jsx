import React, {Component} from 'react'
import Header from '../header'
import Tool from '../tool'
import styles from './styles.postcss'

export default class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        <Header />
        <Tool />
      </div>
    )
  }
}
