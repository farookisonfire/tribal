import * as types from '../features/UserListPage/userListActionTypes';

export default function errorsReducer(state=[], action) {
  switch(action.type) {
    case types.RECEIVE_USERS_FAIL:
      return state.concat(action.err);
    default:
      return state;
  }
}
