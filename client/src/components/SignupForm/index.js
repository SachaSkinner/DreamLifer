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

        API.signupUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            url: ""
        }).then(res => {
            this.refreshState();
            this.setState({ headerMessage: res.data[0] });
            this.checkSession();
        }).catch(err => console.log(err));
    };

    checkSession = () => {
        API.checkSession().then(res => {
            if (res.data.bool) {
                this.props.handleGlobalState("User", res.data);
            }
        }).catch(err => console.log(err));
    };

<<<<<<< HEAD:client/src/components/Signup/index.js
  

=======
>>>>>>> 456863cd987408209116651d23a77f892f9f636a:client/src/components/SignupForm/index.js
    render() {

        return (
        <div className='signupWrapper'>
<<<<<<< HEAD:client/src/components/Signup/index.js
            <h3>{this.state.status}</h3>
=======
            <h3>{this.state.headerMessage}</h3>
>>>>>>> 456863cd987408209116651d23a77f892f9f636a:client/src/components/SignupForm/index.js
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
        );
    };

};

export default SignupForm;