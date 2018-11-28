import PropTypes from 'prop-types'

const Section = ({ children }) => (
  <section>
    {children}
    <style jsx>{`
      section {
        margin: 2em auto;
        max-width: 28em;
        padding: 0 1.5em;
      }
    `}</style>
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired
}

export default Section
