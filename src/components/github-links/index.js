import React, {Component, PropTypes} from 'react'
import Radium from 'radium'
import logo from './github-logo.svg'

@Radium
export default class GithubLinks extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired
  }

  render () {
    return (
      <footer style={styles.container}>
        <img style={styles.logo} src={logo} alt='Github logo' />
        <p style={styles.links}>
          <a key='github-links-author' style={styles.link} href={`https://github.com/${this.props.author}`}>{this.props.author}</a> / <a key='github-links-project' style={styles.link} href={`https://github.com/${this.props.author}/${this.props.project}`}>{this.props.project}</a>
        </p>
      </footer>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2.5em auto',
    textAlign: 'left',
    color: 'black'
  },
  logo: {
    marginRight: '.3em',
    width: '2em'
  },
  links: {
    margin: 0
  },
  link: {
    display: 'inline-block',
    color: 'white',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    },
    ':focus': {
      textDecoration: 'underline',
      outline: 0
    }
  }
}
