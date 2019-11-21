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
        questions: [],
        calendarDate: '',
        todos: [],
        reviews: [],

    };

    handleDashState = (state, value) => {
        this.setState({ [state]: moment(value).format("ddd MMM DD YYYY") })
        API.getDayInfo(this.props.User.id, moment(value).format("ddd MMM DD YYYY"))
            .then((response) => {
                console.log(response)
                this.setState({ reviews: response.data.reviews, todos: response.data.todos })
            })
    }



    handleActiveTab = event => {
        const tabSwitch = event.target.name
        this.setState({
            tab: tabSwitch
        });
    };

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
                            <Col size='md-7'>
                                <h1 style={style}>{this.props.User.firstName.length >= 1 ? `Welcome back, ${this.props.User.firstName[0].toUpperCase() + this.props.User.firstName.slice(1)}!` :
                                    'Welcome!'}</h1>
                                <br></br>
                                <h2 style={style}>{this.state.calendarDate}</h2>
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
           
        );
    };
};

export default Dashboard;



