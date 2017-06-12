import React from 'react';
import LetterDivider from './LetterDivider';
import {shallow} from 'enzyme';

describe('<LetterDivider />', () => {
  it('should render div, h2, Divider', () => {
    const props = {letter: ""};
    const wrapper = shallow(<LetterDivider {...props}/>);
      expect(wrapper.find('div').length).toEqual(1);
      expect(wrapper.find('h2').length).toEqual(1);
      expect(wrapper.find('Divider').length).toEqual(1);
  });
});
