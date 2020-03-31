import { Component } from 'react'
import FileDropZone from './FileDropZone'
import Section from './Section'
import SymbolList from './SymbolList'

export default class Tool extends Component {
  state = {
    svg: null,
    symbols: null,
  }

  onDrop = (event) => {
    const reader = new window.FileReader()

    reader.onload = () => {
      const parser = new window.DOMParser()
      const doc = parser.parseFromString(reader.result, 'image/svg+xml')
      const idList = Array.from(doc.querySelectorAll('symbol[id]')).map(
        (element) => element.id
      )

      this.setState({
        svg: reader.result,
        symbols: idList,
      })
    }

    reader.readAsText(event.dataTransfer.files[0])
  }

  render() {
    return (
      <main>
        <Section>
          <FileDropZone
            label="Drop SVG containing symbols"
            onDrop={this.onDrop}
          />
        </Section>
        {this.state.svg !== null && (
          <div dangerouslySetInnerHTML={{ __html: this.state.svg }} />
        )}
        {this.state.symbols !== null && (
          <SymbolList symbols={this.state.symbols} />
        )}
        <style jsx>{`
          main {
            display: block;
          }
          div {
            display: none;
          }
        `}</style>
      </main>
    )
  }
}
