import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CreateUser from './CreateUser';
import {capitalize, trimDate, sortAndFilter} from './userListPageHelpers';
import {getUsers} from './userListActions';
import SortBy from '../SortBy/SortBy';
import SearchBar from '../SearchBar/SearchBar';
import Profile from '../Profile/Profile';

export class UserListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "last",
      searchString: "",
      modalState: false,
      selectedUser: {firstName: '', lastName: '', picture: '', dob: '', city: '', state: '', email: '', phone: ''}
    };

    this.handleSortSelect = (event, value) => this.setState({sortBy: value});
    this.handleInputChange = (event, newValue) => this.setState({searchString: newValue.toLowerCase()});
    this.handleModalClose = () => this.setState({modalState: false});
    this.handleCardSelect = (userId) => {
      const selectedUser = this.props.users.filter(user => user.id === userId)[0];
      this.setState({selectedUser, modalState: true});
    };
  }
  
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const sortedAndFiltered = sortAndFilter(this.props.users, this.state.sortBy, this.state.searchString);

    return (
      <div className="user-list">
        <span>
          <SearchBar handleInputChange={this.handleInputChange}/>
          <SortBy handleSelect={this.handleSortSelect}/>
        </span>
        
        {sortedAndFiltered.map((user, index) => {
          return CreateUser(user, index, sortedAndFiltered, this.state.sortBy, this.handleCardSelect);
          }
        )}

        <Profile 
          modalState={this.state.modalState}
          handleModalClose={this.handleModalClose}
          selectedUser={this.state.selectedUser} />
      </div>
    );
  }
}

UserListPage.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired
};

export const mapStateToProps = ({users}) => {
  let userList = [];

  if (users.length) {
    users.map(user => {
      const newUser = {};
      newUser.firstName = capitalize(user.name.first);
      newUser.lastName = capitalize(user.name.last);
      newUser.dob = trimDate(user.dob);
      newUser.city = capitalize(user.location.city);
      newUser.state = capitalize(user.location.state);
      newUser.picture = user.picture.large;
      newUser.id = user.login.md5;
      newUser.phone = user.phone;
      newUser.email = user.email;
      userList.push(newUser);
    });
  }

  return {
    users: userList
  };
};

export default connect(mapStateToProps, {getUsers})(UserListPage);
