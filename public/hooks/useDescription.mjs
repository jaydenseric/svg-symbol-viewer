// @ts-check

import { createElement as h, Fragment, useMemo } from "react";
import useHead from "ruck/useHead.mjs";

/**
 * React hook to set description related head tags.
 * @param {string} description Description.
 * @param {number} [priority] Priority.
 */
export default function useDescription(description, priority) {
  useHead(
    "1-2-description",
    useMemo(
      () =>
        h(
          Fragment,
          null,
          h("meta", { name: "description", content: description }),
          h("meta", { property: "og:description", content: description }),
        ),
      [description],
    ),
    priority,
  );
}
