// Profile.js
import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Profile = () => {
  const { user, role } = useContext(UserContext);

  return (
    <div className='wrapper h-[90vh] w-full flex flex-col justify-center '>
      <h1 className=''>ad, {user}!</h1> 
      <p> role : {role}</p>
    </div>
  );
}

export default Profile;
