import React from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {
    if (props.temp) {
        return (
            <div className="weather-card">
                <div className="text-group">
                    <h3 className="card-title">{props.day}</h3>
                    <div className="data-group">
                        <p className="temp">{props.temp}&deg;</p>
                        <p className="humidity">{props.humidity}% humidity</p>
                    </div>
                </div>
                <img className="weather-image" alt="weather" src={props.image} />
            </div>
        )
    } else {
        return <div></div>;
    }
}

export default WeatherCard;