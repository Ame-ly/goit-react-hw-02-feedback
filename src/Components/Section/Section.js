import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
Section.defaultProps = {
  title: '',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
