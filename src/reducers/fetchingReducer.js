import * as types from '../features/UserListPage/userListActionTypes';

export default function fetchingReducer(state = false, action) {
  switch(action.type) {
    case types.REQUEST_USERS:
      return true;
    default:
      return false;
  }
}
