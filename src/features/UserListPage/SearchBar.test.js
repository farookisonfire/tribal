import React from 'react';
import {shallow} from 'enzyme';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('should render TextField', () => {
    const props = {handleInputChange: () => {}};
    const wrapper = shallow(<SearchBar {...props}/>);
      expect(wrapper.find("TextField").length).toEqual(1);
  });
});
