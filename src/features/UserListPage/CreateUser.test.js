import React from 'react';
import CreateUser from './CreateUser';
import {shallow} from 'enzyme';

describe("<CreateUser />", () => {
  it("should render Card, CardHeader, CardMedia, CardTitle, img", () => {
    const wrapper = shallow(<CreateUser />);
      expect(wrapper.find("Card").length).toEqual(1);
      expect(wrapper.find("CardHeader").length).toEqual(1);
      expect(wrapper.find("CardMedia").length).toEqual(1);
      expect(wrapper.find("CardTitle").length).toEqual(1);
      expect(wrapper.find("img").length).toEqual(1);
  });
});
