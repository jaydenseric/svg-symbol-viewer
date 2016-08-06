import React, {PropTypes} from 'react'
import styles from './styles.postcss'

const SymbolList = props => (
  <ol className={styles.SymbolList}>
    {props.symbols.map((symbol, index) => (
      <li key={index}>
        <figure>
          <svg className={styles.symbol}>
            <use xlinkHref={'#' + symbol} />
          </svg>
          <figcaption>{symbol}</figcaption>
        </figure>
      </li>
    ))}
  </ol>
)

SymbolList.propTypes = {
  symbols: PropTypes.array.isRequired
}

export default SymbolList
