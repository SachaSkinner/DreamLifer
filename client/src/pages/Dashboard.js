import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import CalendarView from '../components/CalendarView';
import QuotesRequest from "../helpers/QuotesRequest";

function Dashboard(props) {
        return (
            <Container fluid>

                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>{props.currentUser.length >= 1 ? `Welcome back, ${props.currentUser}!` :
                            'Welcome back!'}</h1>
                            <QuotesRequest />
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <CalendarView />
                    </Col>
                </Row>
            </Container>
        );
    };




export default Dashboard;



