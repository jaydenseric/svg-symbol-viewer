import React, {Component} from 'react'

export default class Header extends Component {
  render () {
    const styles = require('./styles.postcss')
    const logo = require('./svg-symbol-viewer-logo.svg')
    return (
      <header className={styles.container}>
        <img className={styles.logo} src={logo} alt='SVG symbol viewer logo' />
        <h1>SVG symbol viewer</h1>
      </header>
    )
  }
}
