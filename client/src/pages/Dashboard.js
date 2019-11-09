import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ReactUploadImage from "../components/UploadImage"
import CalendarView from '../components/CalendarView';
import Logout from '../components/Logout';
// import { RandomQuestions, QuestionItem } from "../components/RandomQuestions";
import Todo from '../components/ToDoSubmit';
import TodoStore from '../components/ToDoStore';
import API from "../utils/API";
import QuotesRequest from "../helpers/QuotesRequest";
import '../index.css';
import GoalTracker from "../components/GoalTracker";

class Dashboard extends Component {
    state = {
        questions: [],
        calendarDate: ''
    };

    handleDashState = (state, value) => {
        this.setState({ [state]: value })
    }

    loadQuestions = () => {
        API.getQuestions()
            .then(res => {
                this.setState({ questions: res.data });
                // console.log(this.state.questions);
            })
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadQuestions();
    }

    render() {
      
        return (
            <Container fluid>


                <Row>
                    <Col size="md-2">
                        <ReactUploadImage User={this.props.User}></ReactUploadImage>
                    </Col>

                    <Col size="md-10">

                         <Jumbotron>
                         

                            <h1>{this.props.User.firstName.length >= 1 ? `Welcome back, ${this.props.User.firstName}!` :
                                'Welcome!'}</h1>
                            <h2>{this.state.calendarDate}</h2>

                            <QuotesRequest />
                           

                            {/* <RandomQuestions>
                                {this.state.questions.map(question => (
                                    <QuestionItem key={question._id} >
                                    <li>{question.question}</li></QuestionItem>
                                ))}

                                <button onClick={this.loadQuestions}>Random Questions</button>
                            </RandomQuestions> */}

                        </Jumbotron> 
                    </Col>
                </Row>
                <Row>
                    <div className='conty'>
                        <Col size='4'>
                            <CalendarView handleDashState={this.handleDashState} />
                        </Col>
                        <Col size='4'>
                            <Todo User={this.props.User} calendarDate={this.state.calendarDate} />
                            <TodoStore User={this.props.User} calendarDate={this.state.calendarDate} />
                            <Logout handleGlobalState={this.props.handleGlobalState} User={this.props.User} />
                        </Col>
                        <Col size='4'>
                            <GoalTracker User={this.props.User} />
                        </Col>
                    </div>
                </Row>

            </Container>

        );
    };
};




export default Dashboard;



