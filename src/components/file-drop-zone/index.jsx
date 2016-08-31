import React, {Component, PropTypes} from 'react'
import Radium from 'radium'

@Radium
export default class FileDropZone extends Component {
  constructor () {
    super()
    this.state = {
      dragging: false
    }
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    onDrop: PropTypes.func
  }

  handleDragEnter = event => {
    this.setState({dragging: true})
  }

  handleDragOver = event => {
    event.preventDefault()
  }

  handleDragLeave = event => {
    this.setState({dragging: false})
  }

  handleDrop = event => {
    event.preventDefault()
    this.setState({dragging: false})
    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0]
      if (file.type === 'image/svg+xml') {
        this.setState({filename: file.name})
        if (typeof this.props.onDrop === 'function') this.props.onDrop(event)
      }
    }
  }

  render () {
    return (
      <section style={[styles.base, this.state.dragging ? styles.active : styles.inactive]} onDragEnter={this.handleDragEnter} onDragOver={this.handleDragOver} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop}>
        <h1 style={styles.heading}>{this.state.filename ? this.state.filename : this.props.label}</h1>
      </section>
    )
  }
}

const styles = {
  'base': {
    margin: '0 auto',
    borderSize: '.2em',
    borderStyle: 'dashed',
    borderRadius: '.4em',
    maxWidth: '24em',
    padding: '2em',
    textAlign: 'center',
    transition: '.25s'
  },
  'inactive': {
    borderColor: 'black'
  },
  'active': {
    borderColor: 'white'
  },
  'heading': {
    margin: 0,
    fontSize: 'inherit'
  }
}
