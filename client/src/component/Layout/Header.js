import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
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