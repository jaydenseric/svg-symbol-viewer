// @ts-check

import { createElement as h } from "react";
import routePlanForContentWithCss from "ruck/routePlanForContentWithCss.mjs";

import PageErrorLoading, {
  css as cssPageErrorLoading,
} from "./components/PageErrorLoading.mjs";

/**
 * Gets the Ruck app route plan for a URL.
 * @type {import("ruck/serve.mjs").Router}
 */
export default function router(url, headManager, isInitialRoute) {
  if (url.pathname === "/") {
    return routePlanForContentWithCss(
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

  return routePlanForContentWithCss(
    import("./components/PageErrorMissing.mjs").then(
      ({ default: PageErrorMissing, css }) => ({
        content: h(PageErrorMissing),
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
 * @returns {import("ruck/routePlanForContentWithCss.mjs").RouteContentWithCss}
 */
function catchImportContentWithCss(cause) {
  console.error(new Error("Import rejection for route with CSS.", { cause }));

  return {
    content: h(PageErrorLoading),
    css: cssPageErrorLoading,
  };
}
