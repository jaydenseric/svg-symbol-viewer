import React, {Component, PropTypes} from 'react'
import classNames from 'classnames/bind'

export default class FileDropZone extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onDragEnter: PropTypes.func,
    onDragOver: PropTypes.func,
    onDrop: PropTypes.func,
    onDragLeave: PropTypes.func
  }

  constructor () {
    super()
    this.state = {
      dragging: false
    }
  }

  handleDragEnter = (event) => {
    this.setState({dragging: true})
    if (typeof this.props.onDragEnter === 'function') this.props.onDragEnter(event)
  }

  handleDragOver = (event) => {
    event.preventDefault()
    if (typeof this.props.onDragOver === 'function') this.props.onDragOver(event)
  }

  handleDrop = (event) => {
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

  handleDragLeave = (event) => {
    this.setState({dragging: false})
    if (typeof this.props.onDragLeave === 'function') this.props.onDragLeave(event)
  }

  render () {
    const styles = require('./styles.postcss')
    const cx = classNames.bind(styles)
    const className = cx(
      'container',
      {'hover': this.state.dragging}
    )
    return (
      <section className={className} onDragEnter={this.handleDragEnter} onDragOver={this.handleDragOver} onDrop={this.handleDrop} onDragLeave={this.handleDragLeave}>
        <h1>{this.state.filename ? this.state.filename : this.props.label}</h1>
      </section>
    )
  }
}
