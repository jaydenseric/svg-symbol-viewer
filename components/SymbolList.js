import { Scroll } from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import styles from './SymbolList.module.css';

// eslint-disable-next-line jsdoc/require-jsdoc
export default function SymbolList({
  symbols,
  displayStrokes = true,
  displayFills = true,
}) {
  return (
    <Scroll>
      {symbols.map((symbol, index) => (
        <figure
          key={symbol}
          className={styles.figure}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <svg
            className={styles.svg}
            style={{
              stroke: displayStrokes ? 'currentColor' : 'none',
              fill: displayFills ? 'currentColor' : 'none',
            }}
          >
            <use xlinkHref={'#' + symbol} />
          </svg>
          <figcaption className={styles.figcaption}>{symbol}</figcaption>
        </figure>
      ))}
    </Scroll>
  );
}

SymbolList.propTypes = {
  symbols: PropTypes.array.isRequired,
  displayStrokes: PropTypes.bool,
  displayFills: PropTypes.bool,
};
