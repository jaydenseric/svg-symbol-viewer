import PropTypes from 'prop-types'

const Footer = ({ children }) => (
  <footer>
    {children}
    <style jsx>{`
      footer {
        margin: 2em auto 4em;
        max-width: 28em;
        padding: 0 1.5em;
        text-align: center;
      }
    `}</style>
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}

export default Footer
