import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
// import './style.css';

class TodoStore extends Component {
    state = {
        allTodos: [],
        item: 'todo'
    };

    refreshState = () => {
        this.setState({
            allTodos: []
        });
    };

    grabTodos = () => {
        API.getItems(this.state.item, this.props.User.id, this.props.calendarDate).then(res => {
           
            this.setState({ allTodos: res.data.todo });
        }).catch(err => console.log(err));
    };

    loadTodos = () => {
    let interval = setInterval(()=> {
        this.grabTodos() }, 1000);
    return () => clearInterval(interval);
    }

    componentDidMount() {
        this.grabTodos();
        this.loadTodos();
    };


    render() {

        return (
        <div className='signupWrapper'>
            <h3>Your goals on this date</h3>
            <div>
                {this.state.allTodos ?
                this.state.allTodos.map(element => (
                <p key={element._id}>{element.message}</p>
                )) : null
                }
            </div>
        </div>
        );
    };

};

export default TodoStore;