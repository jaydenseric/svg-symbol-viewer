import LinkText from 'device-agnostic-ui/public/components/LinkText.js';
import PropTypes from 'prop-types';
import styles from './GitHubLinks.module.css';
import IconGitHub from './IconGitHub';

const GitHubLinks = ({ author, project }) => (
  <section className={styles.section}>
    <IconGitHub size="2em" />
    <p className={styles.p}>
      <LinkText href={`https://github.com/${author}`}>{author}</LinkText> /{' '}
      <LinkText href={`https://github.com/${author}/${project}`}>
        {project}
      </LinkText>
    </p>
  </section>
);

GitHubLinks.propTypes = {
  author: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default GitHubLinks;
