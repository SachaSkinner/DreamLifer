import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
// import './style.css';
import moment from 'moment';
moment().format();

class GoalTracker extends Component {
    state = {
        allTodos: [],
        item: 'todo',
        now: ''
    };

    refreshState = () => {
        this.setState({
            allTodos: []
        });
    };

    grabTodos = () => {
        API.getTodosToCompare(this.props.User.id).then(res => {
            this.setState({ allTodos: res.data.todo });
        }).catch(err => console.log(err));
    };

    loadTodos = () => {
    let interval = setInterval(()=> {
        this.grabTodos() }, 1000);
    return () => clearInterval(interval);
    }

    getNowDate = () => {
        let Mnow = moment(new Date()).format('YYYY-MM-DD');
        this.setState({ now: Mnow });
    };

    componentDidMount() {
        this.grabTodos();
        this.loadTodos();
        this.getNowDate();
    };
    

    render() {

        return (
        <div className='signupWrapper'>
            <h3>Your future goals</h3>
            <div>
                {this.state.allTodos ?
                this.state.allTodos.map(element => (
                moment(element.date).isAfter(this.state.now) ?
                <p key={element._id}>{element.message} ----- 
                {
                moment(element.date).diff(this.state.now, 'days') === 1 ?
                moment(element.date).diff(this.state.now, 'days') + ' day left!' :
                moment(element.date).diff(this.state.now, 'days') + ' days remaining!'
                }
                </p> : null
                )) : null
                }
            </div>
        </div>
        );
    };

};

export default GoalTracker;