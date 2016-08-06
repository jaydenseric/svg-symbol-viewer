import React, {Component} from 'react'
import FileDropZone from 'components/file-drop-zone'
import SymbolList from 'components/symbol-list'
import styles from './styles.postcss'

export default class Tool extends Component {
  constructor () {
    super()
    this.state = {
      svg: null,
      symbols: null
    }
  }

  onDrop = event => {
    const reader = new window.FileReader()
    reader.onload = () => {
      const parser = new window.DOMParser()
      const doc = parser.parseFromString(reader.result, 'image/svg+xml')
      const idList = Array.from(doc.querySelectorAll('symbol[id]')).map(element => element.id)
      this.setState({
        svg: reader.result,
        symbols: idList
      })
    }
    reader.readAsText(event.dataTransfer.files[0])
  }

  render () {
    return (
      <main className={styles.Tool}>
        <FileDropZone label="Drop SVG containing symbols" onDrop={this.onDrop} />
        {this.state.svg !== null && <div className={styles.svg} dangerouslySetInnerHTML={{__html: this.state.svg}} />}
        {this.state.symbols !== null && <SymbolList symbols={this.state.symbols} />}
      </main>
    )
  }
}
