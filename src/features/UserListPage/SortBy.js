import React from 'react';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const SortBy = ({handleSelect}) => (
  <RadioButtonGroup 
    name=""
    defaultSelected="last"
    onChange={handleSelect}>
    <RadioButton 
      value="first"
      label="First Name" />
    <RadioButton 
      value="last"
      label="Last Name" />
  </RadioButtonGroup>
);

SortBy.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default SortBy;
