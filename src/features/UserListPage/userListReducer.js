import * as types from './userListActionTypes';

export default function userListReducer(state = [], action) {
  switch(action.type) {
    case types.RECEIVE_USERS_SUCCESS:
      return action.users;
    default:
      return state;
  }
}
