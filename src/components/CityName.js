import React from 'react';
import './CityName.css';

const CityName = (props) => {
    if (props.city) {
        return (
            <div className="">
                <h2 className="">{props.city}</h2>
            </div>
        )
    } else {
        return <div></div>;
    }
}

export default CityName;