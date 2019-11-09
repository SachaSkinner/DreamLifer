import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Background from "../helpers/clouds.jpg"

function Community() {
  const style = {
    width: "300px",
    display: "inline-block",
    marginLeft: "10px",
    marginRight: "10px"
    
  };
  const background = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    marginLeft: "85px"
   

  }
  const label = {
    background: "yellow"
  }
  const centred = {
    textAlign: "center",
    marginLeft: "70px"
  }
  return (
    <Container fluid>
      <Row >
        <Col size="md-12">
        <div style={background}>
          <Jumbotron >
            <h1>Welcome to our community! <span role="img" aria-label="emojie">&#129488;</span></h1>
            <div style={style}>
                <div > <h2>What helps you to stay motivated? </h2></div>
                <br></br>
                <div >
                    <form>

                        <div style={label} >
                            <label >Your answer</label>
                            <input style={centred} placeholder="Chare you thougts.." type="text"/>
                        </div>

                       
                        <button>Submit</button>
                    </form>
                </div>
                </div>
                <div style={style}>
                <div > <h2>What are your favorite books?</h2></div>
                <br></br>
                <div >
                    <form>

                        <div style={label}>
                            <label >Your answer</label>
                            <input style={centred} placeholder="Chare you thougts.." type="text"/>
                        </div>

                       
                        <button>Submit</button>
                    </form>
                </div>
                </div>
                <div style={style}>
                <div > <h2>What are your sources of inspiration? </h2></div>
                <br></br>
                <div >
                    <form>

                        <div style={label}>
                            <label >Your answer</label>
                            <input style={centred} placeholder="Chare you thougts.." type="text"/>
                        </div>

                       
                        <button>Submit</button>
                    </form>
                </div>
                </div>
            
          </Jumbotron>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Community;