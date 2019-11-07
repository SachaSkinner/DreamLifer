import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
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
            password: ''
        });
    };

    checkSession = () => {
        API.checkSession().then(res => {
            this.setState({status: res.data.bool})
        }).catch(err => console.log(err));
    };

    componentDidMount(){
        this.checkSession()
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignup = event => {
        event.preventDefault();

        API.signupUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
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
        <div className='signupWrapper'>
            <h3>{this.state.headerMessage}</h3>
            <form>
                <input value={this.state.firstName} name='firstName' onChange={this.handleInputChange} placeholder='first name'></input>
                <input value={this.state.lastName} name='lastName' onChange={this.handleInputChange} placeholder='last name'></input>
                <input value={this.state.email} name='email' onChange={this.handleInputChange} placeholder='email'></input>
                <input value={this.state.phone} name='phone' onChange={this.handleInputChange} placeholder='phone'></input>
                <input value={this.state.password} name='password' onChange={this.handleInputChange} placeholder='password'></input>
                <button onClick={this.handleSignup} className='submitSignup'>sign up</button>
            </form>
            <h4>Already have an account? <Link to='/login'><button>Log in</button></Link></h4>
        </div>
        )
    };
}
};

export default SignupForm;