import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import LetterDivider from './LetterDivider';

const CreateUser = (user, index, users, sortBy, searchString) => {
  if(!searchString || user.firstName.toLowerCase().includes(searchString) || user.lastName.toLowerCase().includes(searchString)) {
    return (
      <span key={user.id}>
        {(index === 0 || user[`${sortBy}Name`][0] !== users[index-1][`${sortBy}Name`][0]) && 
          <LetterDivider letter={user[`${sortBy}Name`][0]} />}
        <Card className="user">
            <CardMedia>
              <img src={user.picture} alt="" />
            </CardMedia>
            <CardTitle 
              title={sortBy === "last" ? user.lastName + ", " + user.firstName : user.firstName + " " + user.lastName}
              subtitle={
                <div>
                  DOB: {user.dob}
                  <br/>
                  City: {user.city}
                </div> 
              }
            />
          </Card>
        </span>
    );
  }
};

export default CreateUser;
