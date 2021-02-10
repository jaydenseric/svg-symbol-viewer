import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = (props) => <header {...props} className={styles.header} />;

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
