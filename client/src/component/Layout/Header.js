import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const style = {
        padding: '5px',
        color: 'rgb(34, 110, 63)',
        backgroundColor: 'rgba(240, 192, 46, 0.989)',
        textAlign: 'center',
        marginLeft: '5px',
        marginRight: '5px'

    }


    return (
        <header style={headerStyle}>
            <Link to='/signup' className="navbar-brand">

                <button style={style}> Sign in</button>
            </Link>
            <Link to='/login' className="navbar-brand">

                <button style={style}>Login in </button>
            </Link>
            <h4>
                Set your future dreams and keep track of how far you've come down the road
            </h4>
        </header>
    )
}

const headerStyle = {
    background: '#315a78',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
    borderRadius: "10px"
}

export default Header