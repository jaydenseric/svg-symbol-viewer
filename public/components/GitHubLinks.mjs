// @ts-check

import LinkText, { css as cssLinkText } from "device-agnostic-ui/LinkText.mjs";
import { createElement as h } from "react";

import IconGitHub, { css as cssIconGitHub } from "./IconGitHub.mjs";

/** @type {import("ruck/routeDetailsForContentWithCss.mjs").RouteContentWithCss["css"]} */
export const css = new Set([
  ...cssLinkText,
  ...cssIconGitHub,
  "/components/GitHubLinks.css",
]);

/**
 * React component for GitHub repo links.
 * @param {object} props Props.
 * @param {string} props.user GitHub username.
 * @param {string} props.repo GitHub repo name.
 */
export default function GitHubLinks({ user, repo }) {
  return h(
    "section",
    { className: "GitHubLinks__section" },
    h(IconGitHub, { size: "1.5em" }),
    h(
      "p",
      { className: "GitHubLinks__p" },
      h(LinkText, { href: `https://github.com/${user}` }, user),
      " / ",
      h(LinkText, { href: `https://github.com/${user}/${repo}` }, repo),
    ),
  );
}
