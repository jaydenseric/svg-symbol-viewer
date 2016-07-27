import React, {Component} from 'react'
import styles from './styles.postcss'
import logo from './svg-symbol-viewer-logo.svg'

export default class Header extends Component {
  render () {
    return (
      <header className={styles.container}>
        <img className={styles.logo} src={logo} alt='SVG symbol viewer logo' />
        <h1>SVG symbol viewer</h1>
      </header>
    )
  }
}
