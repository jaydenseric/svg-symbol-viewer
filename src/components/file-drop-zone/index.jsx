import React, {Component, PropTypes} from 'react'
import styles from './styles.postcss'

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
      <section className={this.state.dragging ? styles.FileDropZone_hover : styles.FileDropZone} onDragEnter={this.handleDragEnter} onDragOver={this.handleDragOver} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop}>
        <h1>{this.state.filename ? this.state.filename : this.props.label}</h1>
      </section>
    )
  }
}
