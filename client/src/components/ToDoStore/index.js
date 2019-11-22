import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
import './style.css';

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
        this.grabTodos() }, 500);
    return () => clearInterval(interval);
    }

    componentDidMount() {
        this.grabTodos();
        this.loadTodos();
    };

    handleComplete = (event) => {
        API.completeTodo(event.target.getAttribute('dataid')).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });

    };

    handleRemove = event => {
        API.removeTodo(event.target.getAttribute('dataid')).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };


    render() {

        return (
        <div className='signupWrapper'>
            <h3>Your goals on this date</h3>
            <div>
            <ul>
                {this.state.allTodos ?
                this.state.allTodos.map(element => (

                <div className='todoBox' key={element._id}>

                    {element.completed ? (
                        <>
                    <li key={element._id} style={{textDecoration: 'line-through'}}> 
                        {element.message} <br></br>
                        Completed! 
                    </li>

                    <div className='buttons'>
                        <span className='remove' dataid={element._id} onClick={this.handleRemove}>X</span>
                    </div>
                        </>
                    ) : (
                        <>
                    <li key={element._id}> 
                        {element.message} <br></br>
                        Need to do! 
                    </li>

                    <div className='buttons'>
                        <span className='remove' dataid={element._id} onClick={this.handleRemove}>X</span>
                        <span className='complete' dataid={element._id} onClick={this.handleComplete}>✔</span>
                    </div>
                        </>
                    )}

                </div>
                )) : null
                }
            </ul>
            </div>
        </div>
        );
    };

};

export default TodoStore;