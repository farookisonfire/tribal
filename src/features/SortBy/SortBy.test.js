import React from 'react';
import {shallow} from 'enzyme';
import SortBy from './SortBy';

describe('<SortBy />', () => {
  it('should render RadioButtonGroup, RadioButton', () => {
    const props = {handleSelect: () => {}};
    const wrapper = shallow(<SortBy {...props}/>);
      expect(wrapper.find('RadioButtonGroup').length).toEqual(1);
      expect(wrapper.find('RadioButton').length).toEqual(2);
  });
});
