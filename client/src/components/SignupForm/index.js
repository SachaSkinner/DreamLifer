import React from "react";
import { Redirect } from 'react-router-dom';
import './style.css';

function SignupForm(props) {
    if (!props.status) {
        return (
            <div className='signupWrapper'>
                <h3>{props.headerMessage}</h3>
                <form>
                    <input value={props.firstName} name='firstName' onChange={props.handleInputChange} placeholder='first name'></input>
                    <input value={props.lastName} name='lastName' onChange={props.handleInputChange} placeholder='last name'></input>
                    <input value={props.email} name='email' onChange={props.handleInputChange} placeholder='email'></input>
                    <input value={props.phone} name='phone' onChange={props.handleInputChange} placeholder='phone'></input>
                    <input value={props.password} name='password' onChange={props.handleInputChange} placeholder='password'></input>
                    <button onClick={props.handleSignup} className='submitSignup'>sign up</button>
                </form>
            </div>
        );
    }
    else {
        return (<Redirect push to='/dashboard' />);
    }
};

export default SignupForm;