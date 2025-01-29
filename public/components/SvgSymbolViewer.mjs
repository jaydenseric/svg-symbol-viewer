// @ts-check

/**
 * @import { RouteContentWithCss } from "ruck/routePlanForContentWithCss.mjs"
 */

import Margin, { css as cssMargin } from "device-agnostic-ui/Margin.mjs";
import Toggle, { css as cssToggle } from "device-agnostic-ui/Toggle.mjs";
import { createElement as h, Fragment, useCallback, useState } from "react";

import FileDropZone, { css as cssFileDropZone } from "./FileDropZone.mjs";
import SymbolList, { css as cssSymbolList } from "./SymbolList.mjs";

/** @type {RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssMargin,
  ...cssToggle,
  ...cssFileDropZone,
  ...cssSymbolList,
  "/components/FileDropZone.css",
]);

/** React component for an SVG symbol viewer. */
export default function SvgSymbolViewer() {
  const [svgFilename, setSvgFilename] = useState(
    /** @type {string | null} */ (null),
  );
  const [svg, setSvg] = useState(/** @type {string | null} */ (null));
  const [symbolIds, setSymbolIds] = useState(
    /** @type {Array<string> | null} */ (null),
  );
  const [displayStrokes, setDisplayStrokes] = useState(true);
  const [displayFills, setDisplayFills] = useState(true);

  const onFileDrop = useCallback((file) => {
    if (file.type === "image/svg+xml") {
      setSvgFilename(file.name);

      const reader = new FileReader();

      reader.onload = () => {
        const result = /** @type {string} */ (reader.result);
        const parser = new DOMParser();
        const doc = parser.parseFromString(result, "image/svg+xml");
        const symbolIds = Array.from(doc.querySelectorAll("symbol[id]")).map(
          (element) => element.id,
        );

        setSvg(result);
        setSymbolIds(symbolIds);
      };

      reader.readAsText(file);
    } else {
      setSvgFilename(null);
      setSvg(null);
      setSymbolIds(null);
    }
  }, []);

  const onChangeToggleDisplayStrokes = useCallback(() => {
    setDisplayStrokes(!displayStrokes);
  }, [displayStrokes]);

  const onChangeToggleDisplayFills = useCallback(() => {
    setDisplayFills(!displayFills);
  }, [displayFills]);

  return h(
    Fragment,
    null,
    h(
      Margin,
      null,
      h(FileDropZone, {
        label: svgFilename || "Drop SVG containing symbols…",
        onFileDrop: onFileDrop,
      }),
    ),
    svg !== null && h("div", {
      style: { display: "none" },
      dangerouslySetInnerHTML: {
        __html: svg,
      },
    }),
    symbolIds !== null && h(
      Fragment,
      null,
      h(
        Margin,
        null,
        h(Toggle, {
          title: "Display SVG strokes",
          inputProps: {
            type: "checkbox",
            checked: displayStrokes,
            onChange: onChangeToggleDisplayStrokes,
          },
        }, "Strokes"),
        h(Toggle, {
          title: "Display SVG fills",
          inputProps: {
            type: "checkbox",
            checked: displayFills,
            onChange: onChangeToggleDisplayFills,
          },
        }, "Fills"),
      ),
      h(SymbolList, { symbolIds, displayStrokes, displayFills }),
    ),
  );
}
