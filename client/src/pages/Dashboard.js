import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import axios from 'axios';
import QuotesApi from "../components/QuotesApi";
import ReactUploadImage from "../components/UploadImage"
import CalendarView from '../components/CalendarView';
import Logout from '../components/Logout';
import { RandomQuestions, QuestionItem } from "../components/RandomQuestions";
import API from "../utils/API";

class Dashboard extends Component {
    state = {
        quoteText: '',
        quoteAuthor: '',
        questions: []
    };

    loadQuestions = () => {
        API.getQuestions()
            .then(res => {
                this.setState({ questions: res.data });
                console.log(this.state.questions);
            })
            .catch(err => console.log(err));
    };



    componentDidMount() {
        // this.loadQuestions();
        axios.get("http://quotes.rest/qod.json", {

        })
            .then(res => {

                this.setState({ quoteText: res.data.contents.quotes[0].quote, quoteAuthor: res.data.contents.quotes[0].author });
                console.log(res.data.contents.quotes[0].quote);
                console.log(res.data.contents.quotes[0].author);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (


            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>User's dashboard is here!!!</h1>
                            <Logout />
                            <CalendarView />

                            <QuotesApi key={this.state.quoteText + this.state.quoteAuthor}>

                                <p>{this.state.quoteText}</p>
                                <p>{this.state.quoteAuthor}</p>

                            </QuotesApi>

                            <RandomQuestions>
                                {this.state.questions.map(question => (
                                    <QuestionItem key={question._id} >
                                    <li>{question.question}</li></QuestionItem>
                                ))}

                                <button onClick={this.loadQuestions}>Random Questions</button>
                            </RandomQuestions>

                            <ReactUploadImage User={this.props.User}></ReactUploadImage>

                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

        );
    }




}



export default Dashboard;



