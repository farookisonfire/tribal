import React from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const Profile = ({handleModalClose, modalState, selectedUser}) => {
  return (
      <Dialog
        title="Profile"
        modal={false}
        open={modalState}
        onRequestClose={handleModalClose} 
      >
        <div className="profile">
          <img className="profile-pic" src={selectedUser.picture} />
        </div>
        <List>
          <Subheader>General</Subheader>
          <ListItem style={{paddingTop: 0, paddingBottom: 7}} insetChildren={true} disabled={true} primaryText={selectedUser.firstName} secondaryText={"First Name"}/>
          <ListItem style={{paddingTop: 0, paddingBottom: 7}} insetChildren={true} disabled={true} primaryText={selectedUser.lastName} secondaryText={"Last Name"}/>
          <Subheader>Contact</Subheader>
          <ListItem style={{paddingTop: 0, paddingBottom: 7}} insetChildren={true} disabled={true} primaryText={selectedUser.phone} secondaryText={"Phone"}/>
          <ListItem style={{paddingTop: 0, paddingBottom: 7}} insetChildren={true} disabled={true} primaryText={selectedUser.email} secondaryText={"Email"}/>
          <Subheader>Location</Subheader>
          <ListItem style={{paddingTop: 0, paddingBottom: 7}} insetChildren={true} disabled={true} primaryText={`${selectedUser.city}, ${selectedUser.state}`} secondaryText={"City, State"}/>
        </List>
      </Dialog>
  );
};

Profile.propTypes = {
  handleModalClose: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  selectedUser: PropTypes.object.isRequired
};

export default Profile;
