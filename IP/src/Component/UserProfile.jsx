import React from "react";

function UserProfile(props) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

export default UserProfile;
