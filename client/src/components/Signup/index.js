import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';

class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        status: 'Sign up below!',
        currentUser: ''
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
            this.setState({status: res.data});
            this.refreshState();
            // this.checkSession();
        }).catch(err => console.log(err));
    };

    checkSession = () => {
        API.checkSession().then(res => {
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
        return (
        <div className='signupWrapper'>
            <h3>{this.state.status}</h3>
            {/* {this.state.currentUser.length >= 1 ? (<h4>Welcome, {this.state.currentUser}</h4>) : (<></>)} */}
            <form>
                <input value={this.state.firstName} name='firstName' onChange={this.handleInputChange} placeholder='first name'></input>
                <input value={this.state.lastName} name='lastName' onChange={this.handleInputChange} placeholder='last name'></input>
                <input value={this.state.email} name='email' onChange={this.handleInputChange} placeholder='email'></input>
                <input value={this.state.phone} name='phone' onChange={this.handleInputChange} placeholder='phone'></input>
                <input value={this.state.password} name='password' onChange={this.handleInputChange} placeholder='password'></input>
                <button onClick={this.handleSignup} className='submitSignup'>sign up</button>
            </form>
        </div>
        )
    };
};

export default Signup;