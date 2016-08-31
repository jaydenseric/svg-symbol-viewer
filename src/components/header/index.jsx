import React, {Component } from 'react'
import Radium from 'radium'
import logo from './svg-symbol-viewer-logo.svg'

@Radium
export default class Header extends Component {
  render () {
    return (
      <header style={styles.container}>
        <img style={styles.logo} src={logo} alt="SVG symbol viewer logo" />
        <h1 style={styles.heading}>SVG symbol viewer</h1>
      </header>
    )
  }
}

const styles = {
  container: {
    padding: '1.5em 0',
    textAlign: 'center',
    fontSize: '150%',
    '@media (min-width: 30em)': {
      fontSize: '180%'
    }
  },
  logo: {
    width: '2em',
    maxWidth: '25%',
    verticalAlign: 'middle'
  },
  heading: {
    display: 'inline-block',
    margin: '.5em',
    fontSize: 'inherit'
  }
}
