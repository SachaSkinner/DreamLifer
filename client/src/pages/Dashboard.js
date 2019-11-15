import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ReactUploadImage from "../components/UploadImage"
import CalendarView from '../components/CalendarView';
import Logout from '../components/Logout';
import Todo from '../components/ToDoSubmit';
import TodoStore from '../components/ToDoStore';
import API from "../utils/API";
import QuotesRequest from "../helpers/QuotesRequest";
import '../index.css';
import GoalTracker from "../components/GoalTracker";
import Emoji from "../components/Emoji";
import Review from "../components/ReviewSubmit";
import ReviewStore from "../components/ReviewStore";
import moment from 'moment';

class Dashboard extends Component {
    state = {
        questions: [],
        calendarDate: '',
        todos: [],
        reviews: [],
        
    };

    handleDashState = (state, value) => {
        this.setState({ [state]: moment(value).format("ddd MMM DD YYYY") })
        API.getDayInfo(this.props.User.id, moment(value).format("ddd MMM DD YYYY"))
            .then((response) =>{
                console.log(response)
                this.setState({ reviews: response.data.reviews, todos: response.data.todos})
            })
    }

  

    render() {
        const style = {
            textAlign: 'center',
            color: '#315a78',
            fontFamily: "san-serif"
            
       
  
        }
        const emoji = {
            display: "inline-block",
            fontSize: "20px"
        }
        return (
            <Container fluid>
                <Logout handleGlobalState={this.props.handleGlobalState} User={this.props.User} />
                <div className="container">
                <Row>
                    <Row>
                        <Col size='md-4'>
                            <ReactUploadImage User={this.props.User}></ReactUploadImage>
                        </Col>
                        <Col size='md-1'></Col>
                        <Col size='md-7'>
                            <h1 style={style}>{this.props.User.firstName.length >= 1 ? `Welcome back, ${this.props.User.firstName[0].toUpperCase() + this.props.User.firstName.slice(1)}!` :
                                'Welcome!'}</h1>
                            <br></br>
                            <h2 style={style}>{this.state.calendarDate}</h2>
                        </Col>
                    </Row>
                    <Col size="md-12">


                        <QuotesRequest />



                    </Col>
                </Row>
                <Row> <button>Plan my day.</button> <button> Review my day</button></Row>
                <Row>
                    <div className='conty'>
                        <Col size='4'>
                            <CalendarView handleDashState={this.handleDashState} />
                        </Col>
                        <Col size='4'>
                            <Todo User={this.props.User} calendarDate={this.state.calendarDate} />
                            <TodoStore User={this.props.User} calendarDate={this.state.calendarDate} />
                        </Col>
                        <Col size='4'>
                            <GoalTracker User={this.props.User} />
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div className='dream'>
                        <Col size='4'>
                            <CalendarView handleDashState={this.handleDashState} />
                        </Col>
                        <Col size='8'>
                            <h1>Review your day by filling out important sections of your choice! </h1>

                            <h2> Capture the important. Get better every day!</h2>
                            <Row><Emoji style={emoji} symbol="💕" /> <div style={emoji}>Family</div> <Emoji style={emoji} symbol="🤸‍♂‍" /> <div style={emoji}>Sport</div><Emoji style={emoji} symbol="🎨" /> <div style={emoji} >Fun/leisure</div><Emoji style={emoji} symbol="🤝👯‍" /> <div style={emoji} >Friends</div><Emoji style={emoji} symbol=" 🍱 " /> <div style={emoji} >Food</div><Emoji style={emoji} symbol="💼" /> <div style={emoji} >Work</div></Row> <Row><Emoji style={emoji} symbol="🎓" /> <div style={emoji} >Study</div><Emoji style={emoji} symbol="📋" /> <div style={emoji} >Notes</div><Emoji style={emoji} symbol="❤️" /> <div style={emoji} >Health/Mood</div><Emoji style={emoji} symbol="😴" /> <div style={emoji} >Sleep</div><Emoji style={emoji} symbol="🌟" /> <div style={emoji} >Ideas</div><Emoji style={emoji} symbol="🙏" /> <div style={emoji} >I am thankful for..</div></Row>
                            <Review User={this.props.User} calendarDate={this.state.calendarDate} />
                            <ReviewStore User={this.props.User} calendarDate={this.state.calendarDate} />
                        </Col>
                    </div>
                </Row>
                </div>
            </Container>

        );
    };
};



export default Dashboard;
