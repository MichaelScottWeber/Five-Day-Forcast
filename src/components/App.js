import React from 'react';
import axios from 'axios';
import moment from 'moment';
import SearchBar from './SearchBar';
import CityName from './CityName';
import WeatherDisplay from './WeatherDisplay';
import Spinner from './Spinner';
import sunny from '../images/sunny.svg';
import rain from '../images/rain.svg';
import cloudy from '../images/cloudy.svg';
import './App.css';

class App extends React.Component {
    state = {
        display: 0,
        city: '',
        day1: '',
        day2: '',
        day3: '',
        day4: '',
        day5: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        temp1: '',
        temp2: '',
        temp3: '',
        temp4: '',
        temp5: '',
        humidity1: '',
        humidity2: '',
        humidity3: '',
        humidity4: '',
        humidity5: '',
        description1: '',
        description2: '',
        description3: '',
        description4: '',
        description5: '',
        rain1: '0',
        rain2: '0',
        rain3: '0',
        rain4: '0',
        rain5: '0',
        windSpeed1: '0',
        windSpeed2: '0',
        windSpeed3: '0',
        windSpeed4: '0',
        windSpeed5: '0',
        windDirection1: '',
        windDirection2: '',
        windDirection3: '',
        windDirection4: '',
        windDirection5: '',
    }

    tempConvert = (temp) => Math.round(temp * (9/5) - 459.67);
    
    lengthConvert = (length) => Math.round((length * 0.0393701) * 100) / 100;

    speedConvert = (speed) => Math.round(speed * 2.23694);

    directionConvert = (dir) => {
        if (dir >= 348.75 || dir <= 11.25) {
            return 'N';
        } else if (dir <= 33.75) {
            return 'NNE';
        } else if (dir <= 56.25) {
            return 'NE';
        } else if (dir <= 78.75) {
            return 'ENE';
        } else if (dir <= 101.25) {
            return 'E';
        } else if (dir <= 123.75) {
            return 'ESE';
        } else if (dir <= 146.25) {
            return 'SE';
        } else if (dir <= 168.75) {
            return 'SSE';
        } else if (dir <= 191.25) {
            return 'S';
        } else if (dir <= 213.75) {
            return 'SSW';
        } else if (dir <= 236.25) {
            return 'SW';
        } else if (dir <= 258.75) {
            return 'WSW';
        } else if (dir <= 281.25) {
            return 'W';
        } else if (dir <= 303.75) {
            return 'WNW';
        } else if (dir <= 326.25) {
            return 'NW';
        } else if (dir < 348.75) {
            return 'NNW';
        }
    }

    isRain = (apiString) => {
        if (apiString.rain) {
            return apiString.rain["3h"];
        } else {
            return "0";
        }
    }

    dayOfWeek = (date) => {
        return moment(date).format('dddd');
    }

    setWeatherImage = (weather) => {
        if (weather === 'Rain' || weather === 'Snow') {
            return rain;
        }
        if (weather === 'Clouds') {
            return cloudy;
        }
        if (weather === 'Clear') {
            return sunny;
        }
    }

    onSearchSubmit = async (location) => {
        const response = await axios.get(
            'https://api.openweathermap.org/data/2.5/forecast', 
            {
                params: {
                    zip: location,
                    appid: 'a33c442aacb25f1e17389960fba1d78b'
                }
            }
        );

        this.setState({ 
            display: 0,
            city: response.data.city.name,
            day1: this.dayOfWeek(response.data.list[0].dt_txt),
            day2: this.dayOfWeek(response.data.list[8].dt_txt),
            day3: this.dayOfWeek(response.data.list[16].dt_txt),
            day4: this.dayOfWeek(response.data.list[24].dt_txt),
            day5: this.dayOfWeek(response.data.list[32].dt_txt),
            image1: this.setWeatherImage(response.data.list[0].weather[0].main),
            image2: this.setWeatherImage(response.data.list[8].weather[0].main),
            image3: this.setWeatherImage(response.data.list[16].weather[0].main),
            image4: this.setWeatherImage(response.data.list[24].weather[0].main),
            image5: this.setWeatherImage(response.data.list[32].weather[0].main),
            temp1: this.tempConvert(response.data.list[0].main.temp),
            temp2: this.tempConvert(response.data.list[8].main.temp),
            temp3: this.tempConvert(response.data.list[16].main.temp),
            temp4: this.tempConvert(response.data.list[24].main.temp),
            temp5: this.tempConvert(response.data.list[32].main.temp),
            humidity1: response.data.list[0].main.humidity,
            humidity2: response.data.list[8].main.humidity,
            humidity3: response.data.list[16].main.humidity,
            humidity4: response.data.list[24].main.humidity,
            humidity5: response.data.list[32].main.humidity,
            description1: response.data.list[0].weather[0].description,
            description2: response.data.list[8].weather[0].description,
            description3: response.data.list[16].weather[0].description,
            description4: response.data.list[24].weather[0].description,
            description5: response.data.list[32].weather[0].description,
            rain1: this.lengthConvert(this.isRain(response.data.list[0])),
            rain2: this.lengthConvert(this.isRain(response.data.list[8])),
            rain3: this.lengthConvert(this.isRain(response.data.list[16])),
            rain4: this.lengthConvert(this.isRain(response.data.list[24])),
            rain5: this.lengthConvert(this.isRain(response.data.list[32])),
            windSpeed1: this.speedConvert(response.data.list[0].wind.speed),
            windSpeed2: this.speedConvert(response.data.list[8].wind.speed),
            windSpeed3: this.speedConvert(response.data.list[16].wind.speed),
            windSpeed4: this.speedConvert(response.data.list[24].wind.speed),
            windSpeed5: this.speedConvert(response.data.list[32].wind.speed),
            windDirection1: this.directionConvert(response.data.list[0].wind.deg),
            windDirection2: this.directionConvert(response.data.list[8].wind.deg),
            windDirection3: this.directionConvert(response.data.list[16].wind.deg),
            windDirection4: this.directionConvert(response.data.list[24].wind.deg),
            windDirection5: this.directionConvert(response.data.list[32].wind.deg),
        })
    }

    displayToggle = () => {
        if (this.state.display === 0) {
            this.setState({ display: 1 });
        } else if (this.state.display === 1) {
            this.setState({ display: 0 });
        }
    }

    render() {
        document.body.style.background = "url('https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80') no-repeat center";
        document.body.style.backgroundSize = "cover";

        if (this.state.image1 === '/static/media/rain.1f770b84.svg') {
            document.body.style.background = "url('https://images.unsplash.com/photo-1525087740718-9e0f2c58c7ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80') no-repeat center";
            document.body.style.backgroundSize = "cover";
        } else if (this.state.image1 === '/static/media/cloudy.c75c6f02.svg') {
            document.body.style.background = "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=689&q=80') no-repeat center";
            document.body.style.backgroundSize = "cover";
        } else if (this.state.image1 === '/static/media/sunny.a42608eb.svg') {
            document.body.style.background = "url('https://images.unsplash.com/photo-1521125664120-ad7e7918efd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80') no-repeat center";
            document.body.style.backgroundSize = "cover";
        }

        console.log(moment().format('dddd'));

        return (
            <div className="app">
                <div className="container">
                    <h1 className="site-title">5 Day Weather Forecast</h1>
                    <SearchBar onSubmit={this.onSearchSubmit} />

                    <CityName 
                        className="city-name"
                        city={this.state.city} 
                    />

                    {this.state.city ? 

                        <div className="weather-card-group">
                            <WeatherDisplay
                                displayToggle={this.displayToggle}
                                display={this.state.display}
                                image1={this.state.image1}
                                image2={this.state.image2}
                                image3={this.state.image3}
                                image4={this.state.image4}
                                image5={this.state.image5}
                                day1={this.state.day1}
                                day2={this.state.day2}
                                day3={this.state.day3}
                                day4={this.state.day4}
                                day5={this.state.day5}
                                temp1={this.state.temp1}
                                temp2={this.state.temp2}
                                temp3={this.state.temp3}
                                temp4={this.state.temp4}
                                temp5={this.state.temp5}
                                description1={this.state.description1}
                                description2={this.state.description2}
                                description3={this.state.description3}
                                description4={this.state.description4}
                                description5={this.state.description5}
                                rain1={this.state.rain1}
                                rain2={this.state.rain2}
                                rain3={this.state.rain3}
                                rain4={this.state.rain4}
                                rain5={this.state.rain5}
                                windSpeed1={this.state.windSpeed1}
                                windSpeed2={this.state.windSpeed2}
                                windSpeed3={this.state.windSpeed3}
                                windSpeed4={this.state.windSpeed4}
                                windSpeed5={this.state.windSpeed5}
                                windDirection1={this.state.windDirection1}
                                windDirection2={this.state.windDirection2}
                                windDirection3={this.state.windDirection3}
                                windDirection4={this.state.windDirection4}
                                windDirection5={this.state.windDirection5}
                                humidity1={this.state.humidity1}
                                humidity2={this.state.humidity2}
                                humidity3={this.state.humidity3}
                                humidity4={this.state.humidity4}
                                humidity5={this.state.humidity5}
                            />
                        </div>
                     : 
                        <Spinner message="Waiting for location data" />
                    }

                    
                </div>
            </div>
        )
    }
}


export default App;