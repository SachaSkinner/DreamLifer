import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ReactUploadImage from "../components/UploadImage"
import CalendarView from '../components/CalendarView';
import HeaderOut from '../component/Layout/Header2';
import Todo from '../components/ToDoSubmit';
import TodoStore from '../components/ToDoStore';
import API from "../utils/API";
import QuotesRequest from "../helpers/QuotesRequest";
import '../index.css';
import GoalTracker from "../components/GoalTracker";
import Review from "../components/ReviewSubmit";
import ReviewStore from "../components/ReviewStore";
import moment from 'moment';

class Dashboard extends Component {
    state = {
        instructions: 'Use the arrows to follow these brief instructions!',
        calendarDate: '',
        todos: [],
        reviews: []
    };

    handleDashState = (state, value) => {
        this.setState({ [state]: moment(value).format("ddd MMM DD YYYY") })
        API.getDayInfo(this.props.User.id, moment(value).format("ddd MMM DD YYYY"))
            .then((response) => {
                this.setState({ reviews: response.data.reviews, todos: response.data.todos })
            })
    }

    handleActiveTab = event => {
        const tabSwitch = event.target.name
        this.setState({
            tab: tabSwitch
        });
    };

    displayModal = () => {
        let modal = document.getElementById('instructionsModal');
        modal.style.display = 'block';
    };

    closeModal = () => {
        let modal = document.getElementById('instructionsModal');
        modal.style.display = 'none';
    };

    prevInstructions = () => {
        if (this.instructionsCount !== 0) {
            this.instructionsCount--;
            this.setState({ instructions: this.instructions[this.instructionsCount]});
        };
    };

    nextInstructions = () => {
        if (this.instructionsCount !== this.state.instructions.length) {
            this.instructionsCount++;
            this.setState({ instructions: this.instructions[this.instructionsCount]});
        };
    };

    instructionsCount = 0;

    instructions = ["Use the arrows to follow these brief instructions!",
        "Here on the Dashboard page, we can use the 'Plan my day' and 'Review my day' sections...",
        "By default, we are in the Planning section. Click on the calendar to select a date, then in the middle section type in your goals and dreams you hope to achieve on that date!",
        "Our goals on the current day will be shown underneath, and our important future goals will be shown to the right",
        "Click a green checkmark to mark the goal as completed, or click the red X to remove it altogether",
        "We keep track of the timing... if your dream is just one day away, we will send you a notification to let you know!",
        "In the Reviewing section, reflect on your day and track your thoughts. We provided prompts for thought.",
        "You can view your memories that you saved on past dates, but you can only write down these memories on the current date"
        ];

    render() {
        const style = {
            textAlign: 'center',
            color: '#315a78',
            fontFamily: "san-serif"

        }
      
       
        const purple = {
            backgroundColor: '#516FCA',
            color: 'white'
        }
        
        
       

        return (
            <>
           
            <div className='wrap'>
            <Container  fluid>

                <div className="container">
                    <Row>
                        <div className="container">
                            <HeaderOut  handleGlobalState={this.props.handleGlobalState} User={this.props.User}className="app-moto" />
                        </div> 
                        <br></br>
                        <Row>
                        
                            <Col size='md-4'>
                                <ReactUploadImage User={this.props.User}></ReactUploadImage>
                            </Col>
                            <Col size='md-1'></Col>
                            <Col size='md-4'>
                                <h1 style={style}>{this.props.User.firstName.length >= 1 ? `Welcome back, ${this.props.User.firstName[0].toUpperCase() + this.props.User.firstName.slice(1)}!` :
                                    'Welcome!'}</h1>
                                <br></br>
                                <h2 style={style}>{this.state.calendarDate}</h2>
                            </Col>
                            <Col size='md-3'>
                                <button onClick={this.displayModal}>New? Click here for a tutorial!</button>
                            </Col>
                        </Row>

                        <Col size="md-12">

                            <QuotesRequest /><br></br>

                        </Col>
                    </Row>
                    <div >
                    <Row >

                        <button style={purple} className="btn btn-outline-dark ml-auto" onClick={this.handleActiveTab} name='goals'>Plan my day.</button> <span>&nbsp;</span>
                        <button style={purple} className="btn btn-outline-dark mr-auto" onClick={this.handleActiveTab} name='review'> Review my day</button>
                    </Row>
                    <br></br>
                    </div>



                    {this.state.tab === 'review' ?
                        (<div >

                            <Row >
                                <Col   size='md-4'>
                                    <CalendarView  handleDashState={this.handleDashState} />
                                </Col>
                                <Col   size='md-4'>
                                    <Review User={this.props.User} calendarDate={this.state.calendarDate} />
                                </Col>
                                <Col  size='md-4'>

                                    <ReviewStore  User={this.props.User} calendarDate={this.state.calendarDate} />
                                </Col>
                            </Row>

                        </div>) :
                        (<div >
                            <Row >
                                <Col   size='md-4'>
                                    <CalendarView handleDashState={this.handleDashState} />
                                </Col>
                                <Col size='md-4'>
                                    <Todo User={this.props.User} calendarDate={this.state.calendarDate} />
                                    <TodoStore User={this.props.User} calendarDate={this.state.calendarDate} />
                                </Col>
                                <Col  size='md-4'>
                                    <GoalTracker User={this.props.User} />
                                </Col>
                            </Row>
                        </div>
                        )}

                </div>
            </Container>
            </div>

            <div className='modal' id='instructionsModal'>
                    <div className="instructions">
                        <span id='close' style={{color: 'red'}} className='close' onClick={this.closeModal}>X</span>
                        <h1 className='modalHead'>Welcome to DreamLifer!</h1>
                        <div className='instructionsButtons'>
                            <p style={{fontSize: '24px', cursor: 'pointer'}} onClick={this.prevInstructions}> &larr; </p>
                            <img src={this.state.instructions}></img>
                            <p style={{fontSize: '24px', cursor: 'pointer'}} onClick={this.nextInstructions}> &rarr; </p>
                        </div>
                        
                    </div>
            </div>
            </>
           

        );
    };
};

export default Dashboard;



