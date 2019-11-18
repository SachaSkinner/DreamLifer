import React from "react";
import { Col, Row, Container } from "../components/Grid";
import pomodoro from '../assets/images/Pomodoro.png';
import books from '../assets/images/books.jpg';
import stories from '../assets/images/stories.jpg'



function Community() {
  
  return (
    <Container fluid>
      <Row>
        
         
            <Col size='md-4'>
              <a href=" https://www.cleverism.com/the-pomodoro-technique-time-management/"> <img src={pomodoro} alt="" width="300" height="200" /></a>
            </Col>
            <Col size='md-3'>
              <a href=" https://double-barrelledtravel.com/top-5-most-inspiring-books/"> <img src={books} alt="" width="300" height="200" /></a>
            </Col>

            <Col size='md-3'>
              <a href=" https://wealthygorilla.com/10-most-inspirational-short-stories/"> <img src={stories} alt="" width="300" height="200" /></a>
            </Col>

         
       
      </Row>
    </Container>
  );
};

export default Community;