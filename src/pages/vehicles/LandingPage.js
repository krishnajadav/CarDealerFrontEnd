import React from 'react';
//import { useState } from 'react'
import {useLocation} from 'react-router-dom'

function Profile() {

  // const location=useLocation();
  // const userInfo= location.state.userInfo;
  //const [page, setPage] = useState(0);
  //const FormTitles = ["Registration Form","Profile page"];  

  return <div className="profile-container">
    <h1>User details</h1>

    <h2>First Name:</h2>
    <h2>Last Name:</h2>
    <h2>Email:</h2>

  </div>;

}

export default Profile;