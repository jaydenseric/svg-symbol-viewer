import PropTypes from 'prop-types';

const Header = (props) => (
  <>
    <header {...props} />
    <style jsx>{`
      header {
        margin: var(--daui-spacing);
      }
    `}</style>
  </>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
