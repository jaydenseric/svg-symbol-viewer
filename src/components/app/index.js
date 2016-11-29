import React, {Component} from 'react'
import Radium, {StyleRoot, Style} from 'radium'
import Header from 'components/header'
import Tool from 'components/tool'
import GithubLinks from 'components/github-links'

@Radium
export default class App extends Component {
  render () {
    return (
      <StyleRoot>
        <Style rules={styles} />
        <Header />
        <Tool />
        <GithubLinks author='jaydenseric' project='svg-symbol-viewer' />
      </StyleRoot>
    )
  }
}

const styles = {
  html: {
    textSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'transparent'
  },
  body: {
    margin: 0,
    padding: '3em 1.5em',
    lineHeight: 1,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    color: 'white',
    backgroundColor: '#7d0bff'
  },
  '::selection': {
    backgroundColor: 'rgba(0, 255, 127, .8)',
    opacity: 0
  }
}
