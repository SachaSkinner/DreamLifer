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
import gif1 from '../../src/assets/images/plan.gif';
import gif2 from '../../src/assets/images/review.gif';


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
        if (this.instructionsCount !== 7) {
            this.instructionsCount++;
            this.setState({ instructions: this.instructions[this.instructionsCount]});
        };
    };

    instructionsCount = 0;

    instructions = [
        'Use the arrows to follow these brief instructions!',
        "1) 'Plan my day' lets you plan your future goals . Click on any calendar date of your choice to mark your future goal.",
        "2) Submit your goals and the app will track your progress.",
        "3) Click the ✓ button if your goal is complete.",
        "4) 'Review my day' allows you to plan your current day.",
        "5) You can review your past notes or write a new one for each category to save your memory for the current day.",
        "6) You shall be notified when your goal is one day away.",
        "Thank you! Click the red X above and lets get started..",
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
                                <h1 className="introText" style={style}>{this.props.User.firstName.length >= 1 ? `Welcome back, ${this.props.User.firstName[0].toUpperCase() + this.props.User.firstName.slice(1)}!` :
                                    'Welcome!'}</h1>
                                <br></br>
                                <h2 className="introText" style={style}>{this.state.calendarDate}</h2>
                            </Col>
                            <Col size='md-3'>
                                <button className="btn btn-primary active tutorialButton" onClick={this.displayModal}>Click here for Tutorial</button>
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
                        <p className='modalHead'><b>Welcome to the tutorial point.</b></p>
                        <p children={this.state.instructions}></p>
                        <div className='instructionsButtons'>
                            <p style={{fontSize: '24px', cursor: 'pointer'}} onClick={this.prevInstructions}> &larr;</p>
                                 <div>
                                    <img src={gif1} width="400" height="210" alt="instruction Gifs"></img><br></br><hr></hr>
                                    <img src={gif2} width="400" height="210" alt="instruction Gifs"></img>
                                 </div>
                            <p style={{fontSize: '24px', cursor: 'pointer'}} onClick={this.nextInstructions}> &rarr; </p>
                        </div>                   
                    </div>
            </div>
            </>
           

        );
    };
};

export default Dashboard;



