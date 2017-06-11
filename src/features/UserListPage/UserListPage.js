import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CreateUser from './CreateUser';
import {capitalize, trimDate} from './userListPageHelpers';
import {getUsers} from './userListActions';

export class UserListPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(CreateUser)}
      </div>
    );
  }
}

UserListPage.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

export const mapStateToProps = ({users}) => {
  const userList = [];

  if (users.length) {
    users.map(user => {
      const newUser = {};
      newUser.name = capitalize(user.name.first) + ' ' + capitalize(user.name.last);
      newUser.dob = trimDate(user.dob);
      newUser.city = capitalize(user.location.city);
      newUser.thumbnail = user.picture.thumbnail;
      newUser.picture = user.picture.large;
      newUser.username = user.login.username;
      newUser.id = user.login.md5;
      userList.push(newUser);
    });
  }

  return {
    users: userList
  };
};

export default connect(mapStateToProps, {getUsers})(UserListPage);
