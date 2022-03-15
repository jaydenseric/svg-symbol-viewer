// @ts-check

import { createElement as h, useContext } from "react";
import TransferContext from "ruck/TransferContext.mjs";

import ErrorMessage, { css } from "./ErrorMessage.mjs";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export { css };

/** React component for a missing error message. */
export default function ErrorMessageMissing() {
  const ruckTransfer = useContext(TransferContext);

  if (ruckTransfer) {
    ruckTransfer.responseInit.status = 404;
    ruckTransfer.responseInit.statusText = "Not Found";
  }

  return h(ErrorMessage, {
    title: "Error 404",
    description: "Something is missing.",
  });
}
