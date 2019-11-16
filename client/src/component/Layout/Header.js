import React from 'react';
// import { Link } from 'react-router-dom'


function Header() {
    return (
        <header style={headerStyle}>
            <h4>
                Set your future dreams and keep track of how far you've come down the road
            </h4>
            {/* <Link style={linkStyle} to="/">Home </Link> | */}
           {/* | <Link style={linkStyle} to="myList">About Us</Link> */}
        </header>
    )
}

// const linkStyle = {
//     color: '#663399',
//     textDecoration: 'none'
// }

const headerStyle = {
    background: '#315a78',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`
}

export default Header