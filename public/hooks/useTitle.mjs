// @ts-check

import { createElement as h, Fragment, useMemo } from "react";
import useHead from "ruck/useHead.mjs";

/**
 * React hook to set title related head tags.
 * @param {string} title Title.
 * @param {number} [priority] Priority.
 */
export default function useTitle(title, priority) {
  useHead(
    "1-1-title",
    useMemo(() => {
      const fullTitle = `${title} - Ruck`;
      return h(
        Fragment,
        null,
        h("title", null, fullTitle),
        h("meta", { property: "og:title", content: fullTitle }),
      );
    }, [title]),
    priority,
  );
}
