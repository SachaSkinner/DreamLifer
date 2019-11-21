import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';
import moment from 'moment';
import Moment from 'moment';
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

            const sortedDates  = res.data.todo.sort((a,b) => new Moment(a.date).format('YYYYMMDD') - new Moment(b.date).format('YYYYMMDD'));

            this.setState({ allTodos: sortedDates });
            for (var i = 0; i < sortedDates.length; i++) {
                if (moment(sortedDates[i].date).isAfter(this.state.now)) {
                    if ((moment(sortedDates[i].date).diff(this.state.now, 'days') === 1) && (sortedDates[i].completed === false)) {
                        if (this.closeDates.length >= 1) {
                            break;
                        }
                        this.closeDates.push(sortedDates[i]);
                        this.displayNotification(this.closeDates[0]);
                    }
                }
            }
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

    closeDates = [];

    displayNotification(date) {
        return new Notification('DreamLifer', {body: `Hey! Your goal: "${date.message}" 
is just one day away!! Do your best to finish up!`});
    }

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
            <h3>Your future goals</h3>
            <div>
                {this.state.allTodos ?
                this.state.allTodos.map(element => (
                moment(element.date).isAfter(this.state.now) && element.completed === false ?
                <div className='todoBox' key={element._id}>
                <p key={element._id}> <span>&nbsp;</span>! {element.message} ----- {' '}
                {
                moment(element.date).diff(this.state.now, 'days') === 1 ?
                (moment(element.date).diff(this.state.now, 'days') + ' day left!') :
                moment(element.date).diff(this.state.now, 'days') + ' days remaining!'
                }
                </p>
                <div className='buttons'>
                <span className='remove' dataid={element._id} onClick={this.handleRemove}>X</span>
                <span className='complete' dataid={element._id} onClick={this.handleComplete}>✔</span>
                </div>
                </div> : null
                )) : null
                }

            </div>
        </div>
        );
    };

};

export default GoalTracker;