import React, { Component } from "react";
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

class SignupForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        headerMessage: 'Sign up below!'
    };

    refreshState = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            url: ''
        });
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignup = event => {
        event.preventDefault();

        if (this.state.firstName.length < 15 && this.state.password !== '') {
            API.signupUser({
                firstName: this.state.firstName.trim(),
                lastName: this.state.lastName.trim(),
                email: this.state.email.trim(),
                phone: this.state.phone.trim(),
                password: this.state.password.trim(),
                url: ""
            }).then(res => {
                this.refreshState();
                this.setState({ headerMessage: res.data[0] });
                this.checkSession();
            }).catch(err => console.log(err));
        } else {
            this.setState({ headerMessage: 'First name must be less than 15 characters, email and password are required'});
        };
    };

    checkSession = () => {
        API.checkSession().then(res => {
            if (res.data.bool) {
                this.props.handleGlobalState("User", res.data);
            }
        }).catch(err => console.log(err));
    };

    render() {

        return (
        <div className='signupWrapper'>
            <h3>{this.state.headerMessage}</h3>
            <form>
                <input className="signupInput" value={this.state.firstName} name='firstName' onChange={this.handleInputChange} placeholder='first name (Less than 15 characters)'></input>
                <input className="signupInput" value={this.state.lastName} name='lastName' onChange={this.handleInputChange} placeholder='last name'></input>
                <input className="signupInput" value={this.state.email} name='email' onChange={this.handleInputChange} placeholder='email (Required)'></input>
                <input className="signupInput" value={this.state.phone} name='phone' onChange={this.handleInputChange} placeholder='phone'></input>
                <input className="signupInput" type='password' value={this.state.password} name='password' onChange={this.handleInputChange} placeholder='password (Required)'></input>
                <button onClick={this.handleSignup} className='submitSignup btn btn-outline-dark'>sign up</button>
            </form>
            <h3>Already have an account? <Link to='/login'><button className='loginBtn btn btn-outline-dark'>Log in</button></Link></h3>
        </div>
        );
    };

};

export default SignupForm;