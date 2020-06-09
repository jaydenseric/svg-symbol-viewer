import PropTypes from 'prop-types';

const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        margin: calc(var(--daui-spacing) * 2) var(--daui-spacing);
      }
    `}</style>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
