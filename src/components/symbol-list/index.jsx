import React, {Component, PropTypes} from 'react'

export default class SymbolList extends Component {
  static propTypes = {
    symbols: PropTypes.array
  }

  render () {
    const styles = require('./styles.postcss')
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
