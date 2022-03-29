// @ts-check

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import Para, { css as cssPara } from "device-agnostic-ui/Para.mjs";
import { createElement as h } from "react";

/** @type {import("ruck/routePlanForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssHeading,
  ...cssMargin,
  ...cssPara,
]);

/**
 * React component for an error message.
 * @param {object} props Props.
 * @param {string} props.title Title.
 * @param {import("react").ReactNode} props.description Description.
 */
export default function ErrorMessage({ title, description }) {
  return h(
    Margin,
    null,
    h(Heading, null, title),
    h(Para, null, description),
  );
}
