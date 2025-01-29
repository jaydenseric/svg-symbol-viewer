// @ts-check

/**
 * @import { ComponentPropsWithoutRef } from "react"
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import classNameProp from "class-name-prop";
import { createElement as h, useCallback, useState } from "react";

/** @satisfies {RouteContentWithCss["css"]} */
export const css = new Set([
  "/components/FileDropZone.css",
]);

/**
 * React component for a file drop zone.
 * @param {object} props Props.
 * @param {string} props.label Label.
 * @param {(file: File) => void} props.onFileDrop Callback for when a file is
 *   dropped on the zone.
 */
export default function FileDropZone({ label, onFileDrop }) {
  const [dragging, setDragging] = useState(false);

  const onDragEnter = useCallback(() => {
    setDragging(true);
  }, []);

  /**
   * @satisfies {NonNullable<
   *   ComponentPropsWithoutRef<"p">["onDragOver"]
   * >}
   */
  const onDragOver = useCallback((event) => {
    event.preventDefault();
  }, []);

  const onDragLeave = useCallback(() => {
    setDragging(false);
  }, []);

  /**
   * @satisfies {NonNullable<
   *   ComponentPropsWithoutRef<"p">["onDrop"]
   * >}
   */
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      setDragging(false);

      if (event.dataTransfer.files.length > 0) {
        onFileDrop(event.dataTransfer.files[0]);
      }
    },
    [onFileDrop],
  );

  return h(
    "p",
    {
      className: classNameProp(
        "FileDropZone__zone",
        dragging && "FileDropZone__zone--active",
      ),
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
    },
    label,
  );
}
