// @ts-check

/**
 * @import { ReactNode } from "react"
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement as h } from "react";

/** @satisfies {RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssHeading,
  ...cssMargin,
  ...cssPara,
]);

/**
 * React component for an error page.
 * @param {object} props Props.
 * @param {string} props.title Title.
 * @param {ReactNode} props.description Description.
 */
export default function PageError({ title, description }) {
  return h(
    Margin,
    null,
    h(Heading, null, title),
    h(Para, null, description),
  );
}
