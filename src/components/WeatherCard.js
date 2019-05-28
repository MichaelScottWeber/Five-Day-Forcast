import React from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {
    return (
        <div className="ui raised card">
            <div className="content">
                <h3 className="center aligned header">{props.day}</h3>
            </div>
            <div className="center aligned image">
                <img alt="weather image" src={props.image} />
            </div>
            <div className="center aligned content">
                <h3 className="header">{props.temp}&deg;</h3>
                <span>{props.highTemp}</span>
                <span className="meta"> {props.lowTemp}</span>
            </div>
        </div>
    )
}

export default WeatherCard;