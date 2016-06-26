import React, {Component} from 'react'
import Header from '../header'
import Tool from '../tool'

export default class App extends Component {
  render () {
    const styles = require('./styles.postcss')
    return (
      <div className={styles.app}>
        <Header />
        <Tool />
      </div>
    )
  }
}
