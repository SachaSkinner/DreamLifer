import React from "react";
import { Redirect } from 'react-router-dom';
import './style.css';

function LoginForm(props) {
    if (!props.status) {
        return (
            <div className='loginWrapper'>
                <h3>{props.headerMessage}</h3>
                    <form>
                        <input value={props.email} name='email' onChange={props.handleInputChange} placeholder='email'></input>
                        <input value={props.password} name='password' onChange={props.handleInputChange} placeholder='password'></input>
                        <button onClick={props.handleLogin} className='submitLogin'>sign in</button>
                    </form>
            </div>
        )
    } else {
        return (<Redirect push to='/dashboard' />);
    };
}

export default LoginForm;