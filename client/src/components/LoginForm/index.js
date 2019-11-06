import React, { Component } from "react";
import {BrowserRouter as Redirect} from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        status: false,
        modalMessage: 'Log in here!'
    };

    refreshState = () => {
        this.setState({
            email: '',
            password: ''
        });
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleLogin = event => {
        event.preventDefault();

        API.loginUser({
            email: this.state.email,
            password: this.state.password
        }).then(res => {
            this.setState({status: res.data[1], modalMessage: res.data[0]});
            this.refreshState();
            console.log(res);
            // this.checkSession();
        }).catch(err => console.log(err));
    };

    checkSession = () => {
        API.checkSession().then(res => {
            console.log(res);
            if (res.data.bool) {
                this.setState({currentUser: res.data.firstName}); 
            } else {
                console.log('No user logged in');
            }
        }).catch(err => console.log(err));
    };

    // componentDidMount() {
    //     this.checkSession();
    // };

    render() {
        if (this.state.status) {
            return (<Redirect to='/dashboard' />);
        } else {
        return (
        <div className='loginWrapper'>
            <h3>{this.state.modalMessage}</h3>
            {/* {this.state.currentUser.length >= 1 ? (<h4>Welcome, {this.state.currentUser}</h4>) : (<></>)} */}
            <form>
                <input value={this.state.email} name='email' onChange={this.handleInputChange} placeholder='email'></input>
                <input value={this.state.password} name='password' onChange={this.handleInputChange} placeholder='password'></input>
                <button onClick={this.handleLogin} className='submitLogin'>sign in</button>
            </form>
        </div>
        )
    };
}
};

export default LoginForm;