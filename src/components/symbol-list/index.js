import React, {Component, PropTypes} from 'react'
import Radium, {keyframes} from 'radium'

@Radium
export default class SymbolList extends Component {
  static propTypes = {
    symbols: PropTypes.array.isRequired
  }

  render () {
    return (
      <ol style={styles.container}>
        {this.props.symbols.map((symbol, index) => (
          <li style={[styles.item, {animationDelay: `${index * 0.18}s`}]} key={index}>
            <figure style={styles.figure}>
              <svg style={styles.symbol}>
                <use xlinkHref={'#' + symbol} />
              </svg>
              <figcaption style={styles.figcaption}>{symbol}</figcaption>
            </figure>
          </li>
        ))}
      </ol>
    )
  }
}

const entryKeyframes = keyframes({
  'from': {
    opacity: 0,
    transform: 'scale(.8)'
  }
})

const gridSize = 8
const gridColor = '#ccc'
const gradient = `linear-gradient(45deg, ${gridColor} 25%, transparent 25%, transparent 75%, ${gridColor} 75%, ${gridColor} 100%)`

const styles = {
  'container': {
    margin: 0,
    padding: '.75em',
    textAlign: 'center'
  },
  'item': {
    display: 'inline-block',
    padding: 'inherit',
    animationName: entryKeyframes,
    animationDuration: '.6s',
    animationFillMode: 'backwards'
  },
  'figure': {
    margin: 0
  },
  'symbol': {
    width: '8em',
    height: '8em',
    strokeWidth: 0,
    stroke: 'black',
    fill: 'black',
    backgroundColor: 'white',
    backgroundImage: `${gradient}, ${gradient}`,
    backgroundSize: `${gridSize * 2}px ${gridSize * 2}px`,
    backgroundPosition: `0 0, ${gridSize}px ${gridSize}px`,
    boxShadow: `0 .1em .4em rgba(0, 0, 0, .2)`
  },
  'figcaption': {
    marginTop: '.5em'
  }
}
