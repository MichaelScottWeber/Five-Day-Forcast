import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import CityName from './CityName';
import WeatherCard from './WeatherCard';
import Spinner from './Spinner';
import sunny from '../images/sunny.svg';
import rain from '../images/rain.svg';
import cloudy from '../images/cloudy.svg';
import './App.css';

class App extends React.Component {
    state = {
        city: '',
        day1: 'Today',
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
    }

    kToF = (temp) => {
        return Math.round(temp * (9/5) - 459.67);
    }

    dayOfWeek = (date) => {
        const day = new Date(date);
        const dayNum = day.getDay();
        if (dayNum === 0) {
            return 'Sunday'
        };
        if (dayNum === 1) {
            return 'Monday';
        };
        if (dayNum === 2) {
            return 'Tuesday';
        };
        if (dayNum === 3) {
            return 'Wednesday';
        };
        if (dayNum === 4) {
            return 'Thursday';
        };
        if (dayNum === 5) {
            return 'Friday';
        };
        if (dayNum === 6) {
            return 'Saturday';
        };
    }

    setWeatherImage = (weather) => {
        if (weather === 'Rain') {
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
        console.log(location);
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
            temp1: this.kToF(response.data.list[0].main.temp),
            temp2: this.kToF(response.data.list[8].main.temp),
            temp3: this.kToF(response.data.list[16].main.temp),
            temp4: this.kToF(response.data.list[24].main.temp),
            temp5: this.kToF(response.data.list[32].main.temp),
            humidity1: response.data.list[0].main.humidity,
            humidity2: response.data.list[8].main.humidity,
            humidity3: response.data.list[16].main.humidity,
            humidity4: response.data.list[24].main.humidity,
            humidity5: response.data.list[32].main.humidity,
        })
    }

    render() {
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
                            <WeatherCard 
                                className="weather-card today"
                                day="Current Weather"
                                image={this.state.image1}
                                temp={this.state.temp1}
                                humidity={this.state.humidity1}
                            />
                            <WeatherCard 
                                className="weather-card"
                                day={this.state.day2}
                                image={this.state.image2}
                                temp={this.state.temp2}
                                humidity={this.state.humidity2}
                            />
                            <WeatherCard 
                                className="weather-card"
                                day={this.state.day3}
                                image={this.state.image3}
                                temp={this.state.temp3}
                                humidity={this.state.humidity3}
                            />
                            <WeatherCard 
                                className="weather-card"
                                day={this.state.day4}
                                image={this.state.image4}
                                temp={this.state.temp4}
                                humidity={this.state.humidity4}
                            />
                            <WeatherCard 
                                className="weather-card"
                                day={this.state.day5}
                                image={this.state.image5}
                                temp={this.state.temp5}
                                humidity={this.state.humidity5}
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