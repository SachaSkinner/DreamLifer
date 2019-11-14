import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import API from '../../utils/API';
// import './style.css';

class Review extends Component {
    state = {
        family: '',
        friends: '',
        work: '',
        study: '',
        fun: '',
        food: '',
        sleep: '',
        mood: '',
        sport: '',
        ideas: '',
        notes: '',
        thanks: '',
        headerMessage: 'Add your comments in here!'
    };

    refreshState = () => {
        this.setState({
            family: '',
        friends: '',
        work: '',
        study: '',
        fun: '',
        food: '',
        sleep: '',
        mood: '',
        sport: '',
        ideas: '',
        notes: '',
        thanks: ''
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

        API.submitReview(this.state.family,this.state.friends,this.state.work,this.state.study,this.state.fun,this.state.food,this.state.sleep,this.state.mood,this.state.sport,this.state.ideas,this.state.notes,this.state.thanks, this.props.User.id, this.props.calendarDate).then(res => {
            this.refreshState();
            this.setState({ headerMessage: res.data });
        }).catch(err => console.log(err));
    };

    render() {

        return (
        <div>
            <h3>{this.state.headerMessage}</h3>
            <form>
                <div>Family</div>
                <textarea value={this.state.family} name='family' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></textarea>
                <div>Friends</div>
                <input value={this.state.friends} name='friends' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Work</div>
                <input value={this.state.work} name='work' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Study</div>
                <input value={this.state.study} name='study' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Fun</div>
                <input value={this.state.fun} name='fun' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Food</div>
                <input value={this.state.food} name='food' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Sleep</div>
                <input value={this.state.sleep} name='sleep' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Mood</div>
                <input value={this.state.mood} name='mood' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Sport</div>
                <input value={this.state.sport} name='sport' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Ideas</div>
                <input value={this.state.ideas} name='ideas' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>Notes</div>
                <input value={this.state.notes} name='notes' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <div>I am thankful for..</div>
                <input value={this.state.thanks} name='thanks' onChange={this.handleInputChange} placeholder='What do you need to accomplish?'></input>
                <button onClick={this.handleSubmit} className='submitSignup'>submit</button>
            </form>
        </div>
        );
    };

};

export default Review;