import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
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

    checkSession = () => {
        API.checkSession().then(res => {
            this.setState({status: res.data.bool})
        }).catch(err => console.log(err));
    };

    componentDidMount() {
        this.checkSession();
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
            this.refreshState();
            this.setState({status: res.data[1], headerMessage: res.data[0]});
        }).catch(err => console.log(err));
    };

    render() {
        if (this.state.status) {
            return (<Redirect push to='/dashboard' />);
        } else {
        return (
        <div className='loginWrapper'>
            <h3>{this.state.headerMessage}</h3>
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