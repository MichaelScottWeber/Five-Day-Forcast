import React from 'react';
import {Spring} from 'react-spring/renderprops';
import WeatherCard from './WeatherCard';
import WeatherDetail from './WeatherDetail';

class WeatherDisplay extends React.Component {
    state = { day: "" }

    onCardSelect = (num) => {
        this.setState({ day: num })
    }

    render() {
        if (this.props.display === 0) {
            return (
                <Spring
                    from={{ opacity: 0,  }}
                    to={{ opacity: 1,  }}
                >
                    {props => (
                        <div style={props}>
                            <div className="weather-card-group">
                                <WeatherCard 
                                    className="weather-card today"
                                    displayToggle={this.props.displayToggle}
                                    onCardSelect={this.onCardSelect}
                                    num="1"
                                    day="Current Weather"
                                    image={this.props.image1}
                                    temp={this.props.temp1}
                                />
                                <WeatherCard 
                                    className="weather-card"
                                    displayToggle={this.props.displayToggle}
                                    onCardSelect={this.onCardSelect}
                                    num="2"
                                    day={this.props.day2}
                                    image={this.props.image2}
                                    temp={this.props.temp2}
                                />
                                <WeatherCard 
                                    className="weather-card"
                                    displayToggle={this.props.displayToggle}
                                    onCardSelect={this.onCardSelect}
                                    num="3"
                                    day={this.props.day3}
                                    image={this.props.image3}
                                    temp={this.props.temp3}
                                />
                                <WeatherCard 
                                    className="weather-card"
                                    displayToggle={this.props.displayToggle}
                                    onCardSelect={this.onCardSelect}
                                    num="4"
                                    day={this.props.day4}
                                    image={this.props.image4}
                                    temp={this.props.temp4}
                                />
                                <WeatherCard 
                                    className="weather-card"
                                    displayToggle={this.props.displayToggle}
                                    onCardSelect={this.onCardSelect}
                                    num="5"
                                    day={this.props.day5}
                                    image={this.props.image5}
                                    temp={this.props.temp5}
                                />
                            </div>
                        </div>                  
                    )}
                </Spring>
            )
        } else if (this.props.display === 1) {
            return (
                <Spring
                    from={{ opacity: 0.1,  }}
                    to={{ opacity: 1,  }}
                >
                    {props => (
                        <div style={props}>
                            <WeatherDetail
                                day={this.props[`day${this.state.day}`]}
                                temp={this.props[`temp${this.state.day}`]}
                                desc={this.props[`description${this.state.day}`]}
                                rain={this.props[`rain${this.state.day}`]}
                                windSpeed={this.props[`windSpeed${this.state.day}`]}
                                windDirection={this.props[`windDirection${this.state.day}`]}
                                humidity={this.props[`humidity${this.state.day}`]}
                                displayToggle={this.props.displayToggle}
                            />
                        </div>
                    )}
                </Spring>
            )
        }
    }
}

export default WeatherDisplay;