import PropTypes from 'prop-types'
import { Component } from 'react'

export default class FileDropZone extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onDrop: PropTypes.func,
  }

  state = {
    dragging: false,
  }

  handleDragEnter = () => {
    this.setState({ dragging: true })
  }

  handleDragOver = () => {
    event.preventDefault()
  }

  handleDragLeave = () => {
    this.setState({ dragging: false })
  }

  handleDrop = (event) => {
    event.preventDefault()

    this.setState({ dragging: false })

    if (event.dataTransfer.files.length > 0) {
      const [file] = event.dataTransfer.files

      if (file.type === 'image/svg+xml') {
        this.setState({ filename: file.name })

        if (typeof this.props.onDrop === 'function') this.props.onDrop(event)
      }
    }
  }

  render() {
    return (
      <div
        className={this.state.dragging ? 'active' : 'inactive'}
        onDragEnter={this.handleDragEnter}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
      >
        <p>{this.state.filename ? this.state.filename : this.props.label}</p>
        <style jsx>{`
          div {
            border-size: 0.2em;
            border-style: dashed;
            border-radius: 0.4em;
            padding: 2em;
            text-align: center;
            transition: 0.25s;
          }
          .inactive {
            border-color: black;
          }
          .active {
            border-color: white;
          }
          p {
            margin: 0;
          }
        `}</style>
      </div>
    )
  }
}
