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
        this.grabTodos() }, 1000);
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

    sortTodos(a, b) {
        if(a.completed === b.completed) {
            return 0;
        } else if (a.completed){
            return 1;
        } else {
            return -1;
        }

    }

    render() {

        return (
        <div className='signupWrapper'>
            <h3>Your goals on this date</h3>
            <div>
                {this.state.allTodos ?
                this.state.allTodos
                .sort(this.sortTodos)
                .map(element => (

                <div className='todoBox' key={element._id}>

                    {element.completed ? (
                        <>
                    <p className='todoMessage' key={element._id}> 
                        <span style={{textDecoration: 'line-through'}}>{element.message}</span> 
                        <br></br>
                        Completed! 
                    </p>

                    <div className='buttons'>
                        <span className='remove' dataid={element._id} onClick={this.handleRemove}>X</span>
                    </div>
                        </>
                    ) : (
                        <>
                    <p className='todoMessage' key={element._id}> 
                        {element.message} <br></br>
                    </p>

                    <div className='buttons'>
                        <span className='remove' dataid={element._id} onClick={this.handleRemove}>X</span>
                        <span className='complete' dataid={element._id} onClick={this.handleComplete}>✔</span>
                    </div>
                        </>
                    )}

                </div>
                )) : null
                }
            </div>
        </div>
        );
    };

};

export default TodoStore;