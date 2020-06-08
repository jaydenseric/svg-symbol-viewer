import PropTypes from 'prop-types';
import { Component } from 'react';

const GRID_SIZE = 8;
const GRID_COLOR = '#ccc';
const GRADIENT = `linear-gradient(45deg, ${GRID_COLOR} 25%, transparent 25%, transparent 75%, ${GRID_COLOR} 75%, ${GRID_COLOR} 100%)`;

export default class SymbolList extends Component {
  static propTypes = {
    symbols: PropTypes.array.isRequired,
  };

  render() {
    return (
      <ol>
        {this.props.symbols.map((symbol, index) => (
          <li key={index} style={{ animationDelay: `${index * 0.18}s` }}>
            <figure>
              <svg>
                <use xlinkHref={'#' + symbol} />
              </svg>
              <figcaption>{symbol}</figcaption>
            </figure>
          </li>
        ))}
        <style jsx>{`
          @keyframes pop {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            80% {
              transform: scale(1.01);
            }
          }
          ol {
            margin: 0;
            padding: 0.75em;
            text-align: center;
          }
          li {
            display: inline-block;
            padding: inherit;
            animation-name: pop;
            animation-duration: 0.6s;
            animation-fill-mode: backwards;
          }
          figure {
            margin: 0;
          }
          svg {
            width: 8em;
            height: 8em;
            strokewidth: 0;
            stroke: black;
            fill: black;
            background-color: white;
            background-image: ${GRADIENT}, ${GRADIENT};
            background-size: ${GRID_SIZE * 2}px ${GRID_SIZE * 2}px;
            background-position: 0 0, ${GRID_SIZE}px ${GRID_SIZE}px;
            box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.2);
          }
          figcaption {
            margin-top: 0.5em;
          }
        `}</style>
      </ol>
    );
  }
}
