import React, {Component, PropTypes} from 'react'
import styles from './styles.postcss'

export default class SymbolList extends Component {
  static propTypes = {
    symbols: PropTypes.array.isRequired
  }

  render () {
    return (
      <ol className={styles.container}>
        {this.props.symbols.map((symbol, index) => {
          return (
            <li key={index}>
              <figure>
                <svg className={styles.symbol}>
                  <use xlinkHref={'#' + symbol}></use>
                </svg>
                <figcaption>{symbol}</figcaption>
              </figure>
            </li>
          )
        })}
      </ol>
    )
  }
}
