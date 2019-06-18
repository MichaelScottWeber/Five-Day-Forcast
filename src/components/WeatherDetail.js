import React from 'react';
import './WeatherDetail.css';

const WeatherDetail =({ day, temp, desc, rain, windSpeed, windDirection, humidity, displayToggle }) => {
    return (
        <div className="weather-detail">
            <h3 className="day">{day}</h3>
            <h3 className="temperature">{temp}&deg;</h3>
            <p className="description">{desc}</p>
            <div className="underline">
                <p className="rain">{rain} inches of rain</p>
            </div>
            <div className="underline">
                <p className="wind">{windSpeed} mph {windDirection} winds</p>
            </div>
            <div className="underline">
                <p className="humidity">{humidity}% humidity</p>
            </div>
            <div className="back-button" onClick={() => displayToggle()}>
                <i className="fas fa-undo-alt"></i>
                <span> Back</span>
            </div>
        </div>
    )
}

export default WeatherDetail;