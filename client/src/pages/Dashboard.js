import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import axios from 'axios';
import QuotesApi from "../components/QuotesApi";

class Dashboard extends Component {
    state = {
        quoteText: '',
        quoteAuthor: ''
    };

    componentDidMount() {
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
                            <QuotesApi key={this.state.quoteText + this.state.quoteAuthor }>

                                <p>{this.state.quoteText}</p>
                                <p>{this.state.quoteAuthor}</p>

                            </QuotesApi>

                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );
    }




}



export default Dashboard;



