import React from 'react';
import {shallow} from 'enzyme';
import SortBy from './SortBy';

describe('<SortBy />', () => {
  it('should render RadioButtonGroup, RadioButton', () => {
    const wrapper = shallow(<SortBy />);
      expect(wrapper.find('RadioButtonGroup').length).toEqual(1);
      expect(wrapper.find('RadioButton').length).toEqual(2);
  });
});
