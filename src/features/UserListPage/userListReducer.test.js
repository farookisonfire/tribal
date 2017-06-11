import userListReducer from './userListReducer';
import {requestUsers, receiveUsersSuccess, receiveUsersFail} from './userListActions';

describe("userListReducer", () => {
  it("should return a list of users when passed RECEIVE_USERS_SUCCESS", () => {
    const initialState = [];
    const users = [{dob: "", id: {}, location: {}, login: {}, name: {}, picture: {}}];
    const action = receiveUsersSuccess(users);
    const newState = userListReducer(initialState, action);
      expect(newState).toEqual(users);
  });

  it("should return state when not passed RECEIVE_USERS_HEALTH", () => {
    let initialState;
    const expected = [];
    const action = "NOT_RECEIVE_USERS_SUCCESS";
    const newState = userListReducer(initialState, action);
      expect(newState).toEqual(expected);
  });
});
