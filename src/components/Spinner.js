import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    return (
        <div className="spinner">
            <div className="spinner-animation"></div>
            <p>{props.message}</p>
        </div>
    )
}

export default Spinner;