// @ts-check

import { createElement as h } from "react";

import useDescription from "../hooks/useDescription.mjs";
import useTitle from "../hooks/useTitle.mjs";
import SvgSymbolViewer, {
  css as cssSvgSymbolViewer,
} from "./SvgSymbolViewer.mjs";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssSvgSymbolViewer,
]);

/** React component for the home page. */
export default function PageHome() {
  useTitle("SVG symbol viewer");
  useDescription(
    "An online, no-upload drag-and-drop SVG file symbol extractor and viewer.",
  );

  return h(SvgSymbolViewer);
}
