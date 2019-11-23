import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';
import moment from 'moment';
moment().format();

class Todo extends Component {
    state = {
        now: '',
        message: '',
        headerMessage: 'Select a date, set your goals'
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

        if (this.state.message !== '') {
            API.submitTodo(this.state.message, this.props.User.id, this.props.calendarDate).then(res => {
                this.refreshState();
                this.setState({ headerMessage: res.data });
            }).catch(err => console.log(err));
        } else {
            return null;
        }
    };

    getNowDate = () => {
        let Mnow = moment(new Date()).format('YYYY-MM-DD');
        this.setState({ now: Mnow });
    };

    componentDidMount = () => {
        this.getNowDate();
    };

    render() {

        return (
        <div className='signupWrapper'>
         {this.state.now === moment(this.props.calendarDate).format('YYYY-MM-DD') ? (
            <>
            <h3>
                <p>{this.props.calendarDate}</p>
                {this.state.headerMessage}
            </h3>
            <form>
                <input className="todoInput" value={this.state.message} name='message' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <button onClick={this.handleSubmit} className='btn btn-outline-dark submitTodo'>submit</button>
            </form>
            </> ) : 
            (
                <h3>You can't set a goal for the past! Sorry!</h3>
            )}
        </div>
        );
    };

};

export default Todo;