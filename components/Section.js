import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = (props) => <section {...props} className={styles.section} />;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
