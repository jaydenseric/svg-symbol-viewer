// @ts-check

import { createElement as h, useContext } from "react";
import TransferContext from "ruck/TransferContext.mjs";

import ErrorMessage, { css } from "./ErrorMessage.mjs";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export { css };

/** React component for a loading error message. */
export default function ErrorMessageLoading() {
  const ruckTransfer = useContext(TransferContext);

  if (ruckTransfer) {
    ruckTransfer.responseInit.status = 500;
    ruckTransfer.responseInit.statusText = "Internal Server Error";
  }

  return h(ErrorMessage, {
    title: "Error loading",
    description: "Unable to load.",
  });
}
