import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const SearchBar = ({handleInputChange}) => 
  <TextField 
    hintText="Search for a user..."
    onChange={handleInputChange}/>;

SearchBar.propTypes = {
  handleInputChange: PropTypes.func.isRequired
};

export default SearchBar;