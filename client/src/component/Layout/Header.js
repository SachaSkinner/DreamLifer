

import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from "../../components/Grid";

function Header() {
    const style = {
        padding: '5px',
        color: 'rgb(34, 110, 63)',
        backgroundColor: 'rgba(240, 192, 46, 0.989)',
        textAlign: 'center',
        marginLeft: '5px',
        marginRight: '5px'

    }
    const headerStyle = {
        background: '#315a78',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
        boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
        borderRadius: "10px"
    }

    const center = {
        textAlign: 'center',
       marginLeft: 'auto',
       marginRight: 'auto'
    }

    return (
        <header style={headerStyle}>
            <Row>
                <Col size='col-lg-10 col-sm-12'><h4>
                    Set your future dreams and keep track of how far you've come down the road
            </h4></Col>
            <div style={center}>
            <Col size='col-lg-4 col-sm-12'>
                    <Link to='/signup' className="navbar-brand">

                        <button style={style}> Sign up</button>
                    </Link>
                    <Link to='/login' className="navbar-brand">

                        <button style={style}>Log in </button>
                    </Link>
                </Col>
                </div>
            </Row>


        </header>
    )
}



export default Header