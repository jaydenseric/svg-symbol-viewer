import PropTypes from 'prop-types';

const Section = (props) => (
  <>
    <section {...props} />
    <style jsx>{`
      section {
        margin: calc(var(--daui-spacing) * 2) 0;
      }
    `}</style>
  </>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
