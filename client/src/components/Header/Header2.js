
import React, { Component } from "react";
import Logout from '../Logout';

class HeaderOut extends Component {

    render() {
        const style = {

            color: 'rgb(34, 110, 63)',
            backgroundColor: 'rgba(240, 192, 46, 0.989)',
            textAlign: 'center',
            marginBottom: '-7px',
        }
        return (
            <header style={headerStyle}>
                <h4>
                    Set your future dreams and keep track of how far you've come down the road
                    {' '}

                    <button style={style}> 
                        <div>
                            <Logout handleGlobalState={this.props.handleGlobalState} User={this.props.User} />
                        </div>
                    </button>

                </h4>

            </header>
        )

    }

}

const headerStyle = {
    background: '#315a78',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    boxShadow: `0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
    borderRadius: "10px",
    marginBottom: "15px"
}

export default HeaderOut