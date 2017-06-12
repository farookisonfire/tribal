import React from 'react';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Subheader from 'material-ui/Subheader';

const SortBy = ({handleSelect}) => (
  <div className="sort-by">
    <Subheader>Sort By</Subheader>
    <RadioButtonGroup 
      name="sort"
      defaultSelected="last"
      onChange={handleSelect}
      className="sort-btns"
    >
      <RadioButton 
        value="first"
        label="First Name" />
      <RadioButton 
        value="last"
        label="Last Name" />
    </RadioButtonGroup>
  </div>
);

SortBy.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default SortBy;
