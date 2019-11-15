import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

class Todo extends Component {
    state = {
        message: '',
        headerMessage: 'Add your steps to progress here'
    };

    refreshState = () => {
        this.setState({
            message: '',
        });
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        API.submitTodo(this.state.message, this.props.User.id, this.props.calendarDate).then(res => {
            this.refreshState();
            this.setState({ headerMessage: res.data });
        }).catch(err => console.log(err));
    };

    render() {

        return (
        <div className='signupWrapper'>
            <h3>{this.state.headerMessage}</h3>
            <form>
                <input className="todoInput" value={this.state.message} name='message' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <button onClick={this.handleSubmit} className='btn btn-outline-dark submitTodo'>submit</button>
            </form>
        </div>
        );
    };

};

export default Todo;