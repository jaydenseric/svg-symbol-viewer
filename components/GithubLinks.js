import PropTypes from 'prop-types'

const GithubLinks = ({ author, project }) => (
  <section>
    <img src="/static/github-logo.svg" alt="Github logo" />
    <p>
      <a key="github-links-author" href={`https://github.com/${author}`}>
        {author}
      </a>{' '}
      /{' '}
      <a
        key="github-links-project"
        href={`https://github.com/${author}/${project}`}
      >
        {project}
      </a>
    </p>
    <style jsx>{`
      section {
        display: inline-flex;
        align-items: center;
        text-align: left;
        color: black;
      }
      img {
        margin-right: 0.3em;
        width: 2em;
      }
      p {
        margin: 0;
      }
      a {
        display: inline-block;
        color: white;
        text-decoration: none;
      }
      a:hover,
      a:focus {
        text-decoration: underline;
      }
      a:focus {
        outline: 0;
      }
    `}</style>
  </section>
)

GithubLinks.propTypes = {
  author: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
}

export default GithubLinks
