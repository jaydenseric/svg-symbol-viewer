// @ts-check

import { createElement as h, useContext } from "react";
import TransferContext from "ruck/TransferContext.mjs";

import PageError, { css } from "./PageError.mjs";

/** @type {import("ruck/routePlanForContentWithCss.mjs").RouteContentWithCss["css"]} */
export { css };

/** React component for a loading error page. */
export default function PageErrorLoading() {
  const ruckTransfer = useContext(TransferContext);

  if (ruckTransfer) {
    ruckTransfer.responseInit.status = 500;
    ruckTransfer.responseInit.statusText = "Internal Server Error";
  }

  return h(PageError, {
    title: "Error loading",
    description: "Unable to load.",
  });
}
