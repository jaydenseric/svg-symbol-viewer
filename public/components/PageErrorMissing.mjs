// @ts-check

/**
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import { createElement as h, useContext } from "react";
import TransferContext from "ruck/TransferContext.mjs";

import PageError, { css } from "./PageError.mjs";

/** @satisfies {RouteContentWithCss["css"]} */
export { css };

/** React component for a missing error page. */
export default function PageErrorMissing() {
  const ruckTransfer = useContext(TransferContext);

  if (ruckTransfer) {
    ruckTransfer.responseInit.status = 404;
    ruckTransfer.responseInit.statusText = "Not Found";
  }

  return h(PageError, {
    title: "Error 404",
    description: "Something is missing.",
  });
}
