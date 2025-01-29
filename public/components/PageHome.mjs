// @ts-check

/**
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import { createElement as h } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useTitle from "../hooks/useTitle.mjs";
import SvgSymbolViewer, {
  css as cssSvgSymbolViewer,
} from "./SvgSymbolViewer.mjs";

/** @type {RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssSvgSymbolViewer,
]);

/** React component for the home page. */
export default function PageHome() {
  useTitle("Home");
  useDescription(
    "An online, no-upload drag-and-drop SVG file symbol extractor and viewer.",
  );

  return h(SvgSymbolViewer);
}
