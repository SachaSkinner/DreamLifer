import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import QuotesApi from "../components/QuotesApi";

function Dashboard(props) {

            return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            {!props.status ? (<Redirect push to='/signup' />) : 
                        (
                            <>
                        <h1>User's dashboard is here!!!</h1>
                        <QuotesApi key={props.quoteText + props.quoteAuthor }>

                            <p>{props.quoteText}</p>
                            <p>{props.quoteAuthor}</p>

                        </QuotesApi> </> )}

                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            )
    };


export default Dashboard;



