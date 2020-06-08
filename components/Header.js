const Header = () => (
  <header>
    <img
      src="/static/svg-symbol-viewer-logo.svg"
      alt="SVG symbol viewer logo"
    />
    <h1>SVG symbol viewer</h1>
    <style jsx>{`
      header {
        margin: 1.5em;
        text-align: center;
        font-size: 150%;
      }

      img {
        width: 2em;
        max-width: 25%;
        vertical-align: middle;
      }

      h1 {
        display: inline-block;
        margin: 0.5em;
        font-size: inherit;
      }

      @media (min-width: 30em) {
        header {
          fontsize: 180%;
        }
      }
    `}</style>
  </header>
);

export default Header;
