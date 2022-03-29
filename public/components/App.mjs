// @ts-check

import Heading, { css as cssHeading } from "device-agnostic-ui/Heading.mjs";
import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h, Fragment, useMemo } from "react";
import useCss from "ruck/useCss.mjs";
import useHead from "ruck/useHead.mjs";
import useRoute from "ruck/useRoute.mjs";

import IconSvgSymbolViewer, {
  css as cssIconSvgSymbolViewer,
} from "./IconSvgSymbolViewer.mjs";
import GitHubLinks, { css as cssGitHubLinks } from "./GitHubLinks.mjs";

const css = new Set([
  "https://unpkg.com/device-agnostic-ui@10.1.0/theme.css",
  "https://unpkg.com/device-agnostic-ui@10.1.0/global.css",
  ...cssHeading,
  ...cssLinkText,
  ...cssIconSvgSymbolViewer,
  ...cssGitHubLinks,
  "/components/App.css",
]);

/**
 * React component for the Ruck app.
 * @type {import("ruck/serve.mjs").AppComponent}
 */
export default function App() {
  const route = useRoute();

  useHead(
    "1-1-meta",
    useMemo(() =>
      h(
        Fragment,
        null,
        h("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        }),
        h("meta", { name: "theme-color", content: "white" }),
        h("meta", {
          name: "og:image",
          content: `${route.url.origin}/social-preview.png`,
        }),
        h("meta", { name: "twitter:card", content: "summary" }),
        h("meta", { name: "twitter:site", content: "@jaydenseric" }),
        h("meta", { name: "twitter:creator", content: "@jaydenseric" }),
        h("link", { rel: "icon", href: "/favicon.ico" }),
        h("link", {
          rel: "icon",
          type: "image/svg+xml",
          sizes: "any",
          href: "/favicon.svg",
        }),
        h("link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }),
        h("link", { rel: "manifest", href: "/manifest.webmanifest" }),
      ), [route.url.origin]),
  );

  for (const href of css) useCss(href);

  return h(
    Fragment,
    null,
    h(
      "header",
      { className: "App__header" },
      h(
        Heading,
        { size: 1 },
        h(IconSvgSymbolViewer),
        " SVG symbol viewer",
      ),
    ),
    route.content,
    h(
      "footer",
      { className: "App__footer" },
      h(
        GitHubLinks,
        {
          user: "jaydenseric",
          repo: "svg-symbol-viewer",
        },
      ),
      " ",
      h(
        "small",
        null,
        "© ",
        h(LinkText, { href: "https://jaydenseric.com" }, "Jayden Seric"),
      ),
    ),
  );
}
