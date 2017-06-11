import * as types from './userListActionTypes';

export function requestUsers() {
  return {type: types.REQUEST_USERS};
}

export function receiveUsersSuccess(users) {
  return {type: types.RECEIVE_USERS_SUCCESS, users};
}

export function receiveUsersFail(err) {
  return{type: types.RECEIVE_USERS_FAIL, err};
}

export function getUsers() {
  return function(dispatch) {
    dispatch(requestUsers());
    fetch('https://randomuser.me/api/?results=20&inc=name,location,dob,id,picture,login')
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(json => dispatch(receiveUsersSuccess(json.results)))
      .catch(err => dispatch(receiveUsersFail(err)));
  };
}
