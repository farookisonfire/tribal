import React from 'react';
import {UserListPage, mapStateToProps} from './UserListPage';
import {shallow, mount} from 'enzyme';

describe("the UserListPage container component", () => {
  describe("<UserListPage />", () => {
    it("should render a div", () => {
      const props = {getUsers: () => {}, users: []};
      const wrapper = shallow(<UserListPage {...props}/>);
        expect(wrapper.find("div").length).toEqual(1);
    });
    it("should call componentDidMount", () => {
      const mockFetch = jest.fn();
      const props = {getUsers: mockFetch, users: []};
      const wrapper = mount(<UserListPage {...props}/>);
        expect(wrapper).toBeDefined();
        expect(mockFetch).toHaveBeenCalled();

    });
  });

  describe("mapStateToProps", () => {
    it("should return an object with a formatted list of users when state contains a user list", () => {
      const state = {
        users: [{
            name: {first: "foo", last: "bar"},
            dob: "1986-08-12 18:58:58",
            location: {city: "amsterdam"},
            picture: {thumbnail: "path", large: "path"},
            login: {username: "foobar", md5: "id"}
          }]
      };

      const expected = {
        users: [{
            name: "Foo Bar",
            dob: "1986-08-12",
            city: "Amsterdam",
            thumbnail: "path",
            picture: "path",
            username: "foobar",
            id: "id"
          }]
      };

      const actual = mapStateToProps(state);
        expect(actual).toEqual(expected);
    });
    
    it("should return an object with empty list of users when state contains a list of users with 0 length", () => {
      const state = {users: []};
      const expected = {users: []};
      const actual = mapStateToProps(state);
        expect(actual).toEqual(expected);
    });
  });
});
