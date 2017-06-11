import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle} from 'material-ui/Card';

const CreateUser = (user) => {
  return (
    <Card 
      key={user.id}   
      className="user">
        <CardHeader
          avatar={user.thumbnail}  
          title={`@${user.username}`}
          titleStyle={{lineHeight: "250%"}} />
        <CardMedia>
          <img src={user.picture} alt="" />
        </CardMedia>
        <CardTitle 
          title={user.name}
          subtitle={
            <div>
              DOB: {user.dob}
              <br/>
              City: {user.city}
            </div> 
          } 
        />
      </Card>
  );
};

export default CreateUser;
