import React from "react";
import { Redirect } from 'react-router-dom';

function RedirectHelper(props) {
    if (!props.status) {
        return (<Redirect push to='/signup' />);
    }
    else {
        return null;
    }
};

export default RedirectHelper;