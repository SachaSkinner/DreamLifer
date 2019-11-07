import React from "react";
import './style.css';

function ModalWrapper(props) {

    const handleBackgroundClick = event => {
        if (event.target === event.currentTarget) {
            props.hideModal();
        }
    };

    if (props.modalReady === true) {
        return (
            <div id='test' onClick={handleBackgroundClick}>
            <header>
                <h1>{props.title}</h1>
        
                <button onClick={props.hideModal}>Close</button>
            </header>
        
            {props.children}
        
            </div>
        );
    } else {
        return null
    }
};

export default ModalWrapper;