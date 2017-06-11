import {requestUsers, receiveUsersSuccess, receiveUsersFail} from './userListActions';
import * as types from './userListActionTypes';

describe("UserList synchronous action creators", () => {
  describe("requestUsers", () => {
    it("should create a REQUEST_USERS action", () => {
      const expectedAction = {type: types.REQUEST_USERS};
      const action = requestUsers();
        expect(action).toEqual(expectedAction);
    });
  });

  describe("receiveUsersSuccess", () => {
    it("should create a RECEIVE_USERS_SUCCESS action", () => {
      const expectedAction = {type: types.RECEIVE_USERS_SUCCESS};
      const action = receiveUsersSuccess();
        expect(action).toEqual(expectedAction);
    });
  });

  describe("receiveUsersFail", () => {
    it("should create a RECEIVE_USERS_FAIL action", () => {
      const expectedAction = {type: types.RECEIVE_USERS_FAIL};
      const action = receiveUsersFail();
        expect(action).toEqual(expectedAction);
    });
  });
});
