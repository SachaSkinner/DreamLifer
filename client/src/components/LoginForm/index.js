import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        headerMessage: 'Log in here!'
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
            this.setState({ headerMessage: res.data[0] });
            this.refreshState();
            this.checkSession();
        }).catch(err => console.log(err));
    };

    checkSession = () => {
        API.checkSession().then(res => {
            if (res.data.bool) {
                this.props.handleGlobalState("User", res.data)
                
            }
        }).catch(err => console.log(err));
    };

   

    render() {
        return (
        <div className='loginWrapper'>
            <h3>{this.state.headerMessage}</h3>
            <form>
                <input value={this.state.email} name='email' onChange={this.handleInputChange} placeholder='email'></input>
                <input type='password' value={this.state.password} name='password' onChange={this.handleInputChange} placeholder='password'></input>
                <button onClick={this.handleLogin} className='submitLogin'>sign in</button>
            </form>
        </div>
        );
    };
};

export default LoginForm;