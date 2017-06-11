import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CreateUser from './CreateUser';
import {capitalize, trimDate, sortBy} from './userListPageHelpers';
import {getUsers} from './userListActions';
import SortBy from './SortBy';
import SearchBar from './SearchBar';

export class UserListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "last",
      searchString: ""
    };

    this.handleSortSelect = (event, value) => this.setState({sortBy: value});
    this.handleInputChange = (event, newValue) => this.setState({searchString: newValue.toLowerCase()});
  }
  
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="user-list">
        <SearchBar handleInputChange={this.handleInputChange}/>
        <SortBy handleSelect={this.handleSortSelect}/>
        {this.state.sortBy === "last" ? 
          this.props.usersByLast.map((user, index) => CreateUser(user, index, this.props.usersByLast, this.state.sortBy, this.state.searchString)) :
          this.props.usersByFirst.map((user, index) => CreateUser(user, index, this.props.usersByFirst, this.state.sortBy, this.state.searchString))
        }
      </div>
    );
  }
}

UserListPage.propTypes = {
  usersByFirst: PropTypes.array.isRequired,
  usersByLast: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

export const mapStateToProps = ({users}) => {
  let userList = [];
  let usersByFirst = [];
  let usersByLast = [];

  if (users.length) {
    users.map(user => {
      const newUser = {};
      newUser.firstName = capitalize(user.name.first);
      newUser.lastName = capitalize(user.name.last);
      newUser.dob = trimDate(user.dob);
      newUser.city = capitalize(user.location.city);
      newUser.picture = user.picture.large;
      newUser.id = user.login.md5;
      userList.push(newUser);
    });
    
    usersByLast = sortBy([...userList], "lastName");
    usersByFirst = sortBy([...userList], "firstName");
  }

  return {
    usersByLast,
    usersByFirst
  };
};

export default connect(mapStateToProps, {getUsers})(UserListPage);
