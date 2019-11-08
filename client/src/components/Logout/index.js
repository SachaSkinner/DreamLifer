import React from "react";
import API from '../../utils/API';
import './style.css';

function Logout(props) {

    let message = '';

  function handleLogout() {
    API.logoutUser().then(res => {
        message = res.data;
        console.log(message);
    });
  };

  return (
      <div className='logoutWrapper'>
        <div onClick={handleLogout} className='logoutButton btn btn-danger'>
            Logout
        </div>
      </div>
  );
  
}

export default Logout;
