import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';

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
            <ul>
                {this.state.allTodos ?
                this.state.allTodos.map(element => (
                <li style={{borderBottom: '1px solid dimgray'}} key={element._id}> {element.message} <br></br>Completed? : {`${element.completed}`} </li>
                )) : null
                }
            </ul>
            </div>
        </div>
        );
    };

};

export default TodoStore;