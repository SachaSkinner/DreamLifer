import React, { Component } from "react";
import API from '../../utils/API';
import './style.css';
import Emoji from "../Emoji";
import moment from 'moment';
moment().format();

class Review extends Component {
    state = {
        now: '',
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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getNowDate = () => {
        let Mnow = moment(new Date()).format('YYYY-MM-DD');
        this.setState({ now: Mnow });
    };

    handleSubmit = event => {
        event.preventDefault();

        API.submitReview(this.state.family, this.state.friends, this.state.work, this.state.study, this.state.fun, this.state.food, this.state.sleep, this.state.mood, this.state.sport, this.state.ideas, this.state.notes, this.state.thanks, this.props.User.id, this.props.calendarDate).then(res => {
            this.refreshState();
            this.setState({ headerMessage: res.data });
        }).catch(err => console.log(err));
    };

    componentDidMount = () => {
        this.getNowDate();
    };

    render() {
        const emoji = {
            display: "inline-block",
            fontSize: "20px"
        }

        return (
            <div className='reviewWrap'>
                 {this.state.now === moment(this.props.calendarDate).format('YYYY-MM-DD') ? (
                     <>
                <h3>{this.state.headerMessage}</h3>
                <form className="review_form"> 
                   
                    <div className="center">
                    <Emoji style={emoji} symbol="💕" /> <div style={emoji}>Family</div>
                    <input className="reviews_text" value={this.state.family} name='family' onChange={this.handleInputChange} placeholder=''></input> 
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="🤝👯‍" /> <div style={emoji} >Friends</div></div>
                    <input className="reviews_text" value={this.state.friends} name='friends' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="💼" /> <div style={emoji} >Work</div></div>
                    <input className="reviews_text" value={this.state.work} name='work' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="🎓" /> <div style={emoji} >Study</div></div>
                    <input className="reviews_text" value={this.state.study} name='study' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="🎨" /> <div style={emoji} >Fun/leisure</div></div>
                    <input className="reviews_text" value={this.state.fun} name='fun' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol=" 🍱 " /> <div style={emoji} >Food</div></div>
                    <input className="reviews_text" value={this.state.food} name='food' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="😴" /> <div style={emoji} >Sleep</div></div>
                    <input className="reviews_text" value={this.state.sleep} name='sleep' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="❤️" /> <div style={emoji} >Health/Mood</div></div>
                    <input className="reviews_text" value={this.state.mood} name='mood' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div><Emoji style={emoji} symbol="🤸‍♂‍" /> <div style={emoji}>Sport</div></div>
                    <input className="reviews_text" value={this.state.sport} name='sport' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="🌟" /> <div style={emoji} >Ideas</div></div>
                    <input className="reviews_text" value={this.state.ideas} name='ideas' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div>  <Emoji style={emoji} symbol="📋" /> <div style={emoji} >Notes</div></div>
                    <input className="reviews_text" value={this.state.notes} name='notes' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <div className="center">
                    <div> <Emoji style={emoji} symbol="🙏" /> <div style={emoji} >I am thankful for..</div></div>
                    <input className="reviews_text" value={this.state.thanks} name='thanks' onChange={this.handleInputChange} placeholder=''></input>
                    </div>
                    <br></br>
                    <div className="center">
                    <button onClick={this.handleSubmit} className='btn btn-outline-dark center'>Submit</button>
                    </div>
                 </form>
                 </> ) :
                 (
                     <h3>You can only review your day on today's date!</h3>
                 )}
            </div>
        );
    };

};

export default Review;