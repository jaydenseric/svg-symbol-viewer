import React, {Component} from 'react'
import FileDropZone from '../file-drop-zone'
import SymbolList from '../symbol-list'

export default class Tool extends Component {
  constructor () {
    super()
    this.state = {
      svg: '',
      symbols: []
    }
  }

  onDrop = (event) => {
    const reader = new window.FileReader()
    reader.onload = () => {
      const parser = new window.DOMParser()
      const doc = parser.parseFromString(reader.result, 'image/svg+xml')
      const idList = Array.from(doc.querySelectorAll('symbol[id]')).map((element) => {
        return element.id
      })
      this.setState({
        svg: reader.result,
        symbols: idList
      })
    }
    reader.readAsText(event.dataTransfer.files[0])
  }

  render () {
    const styles = require('./styles.postcss')
    return (
      <main className={styles.container}>
        <FileDropZone onDrop={this.onDrop} />
        <div className={styles.svg} dangerouslySetInnerHTML={{__html: this.state.svg}} />
        <SymbolList symbols={this.state.symbols} />
      </main>
    )
  }
}
