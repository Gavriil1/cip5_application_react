import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import UsernameForm from "./UsernameForm";
import UserPasswordForm from "./UserPasswordForm"
import ProfileEditForm from "./ProfileEditForm"

function ProfilePage() {
  const currentUser = useCurrentUser();
  return (
<div style={{ marginBottom: "50px" }}>
      <div>
      <h1>User:{currentUser?.username}</h1>
      <p>You may change the following settings:</p>
      </div>
      <div>
        {/* <p>Profile Picture</p> */}
        <ProfileEditForm />
        <br></br>
        <br></br>
      </div>
      <div>
        <UsernameForm />
      </div>

      <div>
        <UserPasswordForm />
      </div>
      
      <div style={{ height: '140px' }}></div>

    </div>
  );
}

export default ProfilePage;