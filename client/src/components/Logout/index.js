import React from "react";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import './style.css';

function Logout(props) {

    let message = '';

  function handleLogout() {
    API.logoutUser().then(res => {
        message = res.data;
        console.log(message);
        return <Redirect push to='/' />;
    });
  };

  return (
      <div className='logoutWrapper'>
        <div onClick={handleLogout} className='logoutButton'>
            Logout
        </div>
        {/* <Redirect push to='/' /> */}
      </div>
  );
  
}

export default Logout;
