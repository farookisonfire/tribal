import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';

const LetterDivider = ({letter}) => (
  <div>
    <h2>{letter}</h2>
    <Divider />
  </div>
);

LetterDivider.propTypes = {
  letter: PropTypes.string.isRequired
};

export default LetterDivider;
