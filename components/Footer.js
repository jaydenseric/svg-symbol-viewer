import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ children }) => (
  <footer className={styles.footer}>{children}</footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
