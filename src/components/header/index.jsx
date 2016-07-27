import React from 'react'
import styles from './styles.postcss'
import logo from './svg-symbol-viewer-logo.svg'

const Header = () => (
  <header className={styles.container}>
    <img className={styles.logo} src={logo} alt='SVG symbol viewer logo' />
    <h1>SVG symbol viewer</h1>
  </header>
)

export default Header
