import {combineReducers} from 'redux';
import errors from './errorsReducer';
import fetching from './fetchingReducer';
import users from '../features/UserListPage/userListReducer';

const rootReducer = combineReducers({
  fetching,
  users,
  errors
});

export default rootReducer;