import { Scroll } from 'device-agnostic-ui';
import PropTypes from 'prop-types';

const SYMBOL_SIZE_PX = 150;
const GRID_SIZE_PX = 8;
const GRID_COLOR =
  'hsl(var(--daui-background-hue), var(--daui-background-saturation), var(--daui-background-lightness))';

const gradient = `linear-gradient(45deg, ${GRID_COLOR} 25%, transparent 25%, transparent 75%, ${GRID_COLOR} 75%, ${GRID_COLOR} 100%)`;

// eslint-disable-next-line jsdoc/require-jsdoc
export default function SymbolList({
  symbols,
  displayStrokes = true,
  displayFills = true,
}) {
  return (
    <Scroll>
      {symbols.map((symbol, index) => (
        <figure key={symbol} style={{ animationDelay: `${index * 0.1}s` }}>
          <svg>
            <use xlinkHref={'#' + symbol} />
          </svg>
          <figcaption>{symbol}</figcaption>
        </figure>
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

        figure {
          margin: 0;
          width: ${SYMBOL_SIZE_PX}px;
          animation-name: pop;
          animation-duration: 0.6s;
          animation-fill-mode: backwards;
        }

        svg {
          width: ${SYMBOL_SIZE_PX}px;
          height: ${SYMBOL_SIZE_PX}px;
          background-image: ${gradient}, ${gradient};
          background-size: ${GRID_SIZE_PX * 2}px ${GRID_SIZE_PX * 2}px;
          background-position: 0 0, ${GRID_SIZE_PX}px ${GRID_SIZE_PX}px;
          background-color: hsl(
            var(--daui-background-hue),
            var(--daui-background-saturation),
            calc(var(--daui-background-lightness) - 12%)
          );
          box-shadow: 0 0.25em 0.75em
            hsla(0, 0%, 0%, var(--daui-shadow-opacity));
        }

        figcaption {
          margin-top: 0.5em;
        }
      `}</style>
      <style jsx>{`
        svg {
          stroke: ${displayStrokes ? 'currentColor' : 'none'};
          fill: ${displayFills ? 'currentColor' : 'none'};
        }
      `}</style>
    </Scroll>
  );
}

SymbolList.propTypes = {
  symbols: PropTypes.array.isRequired,
  displayStrokes: PropTypes.bool,
  displayFills: PropTypes.bool,
};
