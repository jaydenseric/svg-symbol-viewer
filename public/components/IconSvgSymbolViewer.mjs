// @ts-check

/**
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import Icon, { css as cssIcon } from "device-agnostic-ui/Icon.mjs";
import { createElement as h } from "react";

/** @type {RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssIcon,
]);

/**
 * React component for a SVG symbol viewer icon.
 * @param {Omit<React.ComponentPropsWithoutRef<typeof Icon>, "title">} props
 *   Props.
 */
export default function IconSvgSymbolViewer(props) {
  return h(
    Icon,
    { ...props, title: "SVG symbol viewer" },
    h("circle", {
      fill: "none",
      strokeWidth: "1.6",
      cx: "13.6",
      cy: "13.6",
      r: "12.8",
    }),
    h("circle", { strokeWidth: ".5", cx: "13.6", cy: "5.549", r: "1.92" }),
    h("circle", { strokeWidth: ".5", cx: "19.2", cy: "8", r: "1.92" }),
    h("circle", { strokeWidth: ".5", cx: "21.651", cy: "13.6", r: "1.92" }),
    h("circle", { strokeWidth: ".5", cx: "19.2", cy: "19.2", r: "1.92" }),
    h("circle", { strokeWidth: ".5", cx: "13.6", cy: "21.651", r: "1.92" }),
    h("circle", { strokeWidth: ".5", cx: "8", cy: "19.2", r: "1.92" }),
    h("circle", { strokeWidth: ".5", cx: "5.549", cy: "13.6", r: "1.92" }),
    h("circle", { strokeWidth: ".5", cx: "8", cy: "8", r: "1.92" }),
    h("path", {
      strokeWidth: "2.56",
      d: "M13.6 21.972V5.68M5.228 13.6H21.52M7.68 7.68L19.2 19.2m-11.52.32L19.2 8",
    }),
    h("path", { strokeWidth: "4.48", d: "M22.4 22.4l8 8" }),
  );
}
