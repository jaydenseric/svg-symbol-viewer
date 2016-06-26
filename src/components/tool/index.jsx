import React, {Component} from 'react'
import FileDropZone from '../file-drop-zone'

export default class Tool extends Component {
  onDrop = (event) => {
    console.log(event)
    const reader = new window.FileReader()
    reader.onload = () => {
      const xml = reader.result
      console.log(xml)
    }
    reader.readAsText(event.dataTransfer.files[0])
  }

  render () {
    const styles = require('./styles.postcss')
    return (
      <main className={styles.container}>
        <FileDropZone onDrop={this.onDrop} />
      </main>
    )
  }
}
