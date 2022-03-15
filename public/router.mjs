// @ts-check

import { createElement as h } from "react";
import routeDetailsForContentWithCss from "ruck/routeDetailsForContentWithCss.mjs";

import ErrorMessageLoading, {
  css as cssErrorMessageLoading,
} from "./components/ErrorMessageLoading.mjs";

/**
 * Gets the Ruck app route details for a URL.
 * @type {import("ruck/serve.mjs").Router}
 */
export default function router(url, headManager, isInitialRoute) {
  if (url.pathname === "/") {
    return routeDetailsForContentWithCss(
      import("./components/PageHome.mjs").then(
        ({ default: PageHome, css }) => ({
          content: h(PageHome),
          css,
        }),
        catchImportContentWithCss,
      ),
      headManager,
      isInitialRoute,
    );
  }

  return routeDetailsForContentWithCss(
    import("./components/ErrorMessageMissing.mjs").then(
      ({ default: ErrorMessageMissing, css }) => ({
        content: h(ErrorMessageMissing),
        css,
      }),
      catchImportContentWithCss,
    ),
    headManager,
    isInitialRoute,
  );
}

/**
 * Catches a dynamic import error for route content with CSS.
 * @param {Error} cause Import error.
 * @returns {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss}
 */
function catchImportContentWithCss(cause) {
  console.error(new Error("Import rejection for route with CSS.", { cause }));

  return {
    content: h(ErrorMessageLoading),
    css: cssErrorMessageLoading,
  };
}
