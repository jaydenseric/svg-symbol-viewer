// @ts-check

/**
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import Scroll, { css as cssScroll } from "device-agnostic-ui/Scroll.mjs";
import { createElement as h } from "react";

/** @type {RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssScroll,
  "/components/SymbolList.css",
]);

/**
 * React component for an SVG symbol list.
 * @param {object} props Props.
 * @param {Array<string>} props.symbolIds SVG symbol IDs.
 * @param {boolean} props.displayStrokes Display SVG strokes.
 * @param {boolean} props.displayFills Display SVG fills.
 */
export default function SymbolList({
  symbolIds,
  displayStrokes = true,
  displayFills = true,
}) {
  return h(
    Scroll,
    null,
    symbolIds.map((symbolId, index) =>
      h(
        "figure",
        {
          key: symbolId,
          className: "SymbolList__figure",
          style: { animationDelay: `${index * 0.1}s` },
        },
        h(
          "svg",
          {
            className: "SymbolList__svg",
            style: {
              stroke: displayStrokes ? "currentColor" : "none",
              fill: displayFills ? "currentColor" : "none",
            },
          },
          h("use", { xlinkHref: "#" + symbolId }),
        ),
        h("figcaption", { className: "SymbolList__figcaption" }, symbolId),
      )
    ),
  );
}
