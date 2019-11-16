import React from 'react';
// import { Link } from 'react-router-dom'


function Header() {
    return (
        <header style={headerStyle}>
            <h4>
                Accomplishing milestones made simpler.           </h4>
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
    background: 'rgb(166, 168, 168)',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    boxShadow: `0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)`
}

export default Header