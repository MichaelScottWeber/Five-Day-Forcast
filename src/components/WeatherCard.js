import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './WeatherCard.css';

const WeatherCard = ({ temp, displayToggle, onCardSelect, num, day, image }) => {
    if (temp) {
        return (
            <div 
                className="weather-card" 
                onClick={() => {
                    displayToggle();
                    onCardSelect(num)
                }}
            >
                <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}
                >
                    {props => (
                        <div style={props}>
                            <div className="fade-container">
                                <h3 className="card-title">{day}</h3>
                                <div className="data-group">
                                    <p className="temp">{temp}&deg;</p>
                                </div>
                                <img className="weather-image" alt="weather" src={image} />
                            </div>
                        </div>
                    )}
                </Spring>
            </div>
        )
    } else {
        return <div>No data available :(</div>;
    }
}

export default WeatherCard;