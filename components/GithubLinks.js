import { LinkText } from 'device-agnostic-ui';
import PropTypes from 'prop-types';
import IconGitHub from './IconGitHub';

const GitHubLinks = ({ author, project }) => (
  <section>
    <IconGitHub size="2em" />
    <p>
      <LinkText href={`https://github.com/${author}`}>{author}</LinkText> /{' '}
      <LinkText href={`https://github.com/${author}/${project}`}>
        {project}
      </LinkText>
    </p>
    <style jsx>{`
      section {
        display: inline-flex;
        align-items: center;
      }

      p {
        margin-left: 0.3em;
        margin-top: 0;
        margin-bottom: 0;
      }
    `}</style>
  </section>
);

GitHubLinks.propTypes = {
  author: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default GitHubLinks;
