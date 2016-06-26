import React, {Component, PropTypes} from 'react'
import Header from '../header'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };
  render () {
    const styles = require('./styles.postcss')
    return (
      <div className={styles.app}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
