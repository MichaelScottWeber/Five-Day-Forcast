import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import sunny from '../images/sunny.svg';
import rain from '../images/rain.svg';
import cloudy from '../images/cloudy.svg';
import partlyCloudy from '../images/partly-cloudy.svg';

class App extends React.Component {
    state = {
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
        highTemp1: '',
        highTemp2: '',
        highTemp3: '',
        highTemp4: '',
        highTemp5: '',
        lowTemp1: '',
        lowTemp2: '',
        lowTemp3: '',
        lowTemp4: '',
        lowTemp5: '',
    }

    kToF = (temp) => {
        return Math.round(temp * (9/5) - 459.67);
    }

    dayOfWeek = (date) => {
        const day = new Date(date);
        const dayNum = day.getDay();
        if (dayNum === 0) {
            return 'Sun'
        };
        if (dayNum === 1) {
            return 'Mon';
        };
        if (dayNum === 2) {
            return 'Tue';
        };
        if (dayNum === 3) {
            return 'Wed';
        };
        if (dayNum === 4) {
            return 'Thr';
        };
        if (dayNum === 5) {
            return 'Fri';
        };
        if (dayNum === 6) {
            return 'Sat';
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
            highTemp1: this.kToF(response.data.list[0].main.temp_max),
            highTemp2: this.kToF(response.data.list[8].main.temp_max),
            highTemp3: this.kToF(response.data.list[16].main.temp_max),
            highTemp4: this.kToF(response.data.list[24].main.temp_max),
            highTemp5: this.kToF(response.data.list[32].main.temp_max),
            lowTemp1: this.kToF(response.data.list[0].main.temp_min),
            lowTemp2: this.kToF(response.data.list[8].main.temp_min),
            lowTemp3: this.kToF(response.data.list[16].main.temp_min),
            lowTemp4: this.kToF(response.data.list[24].main.temp_min),
            lowTemp5: this.kToF(response.data.list[32].main.temp_min),
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />

                <div className="ui segment">
                    <h2 className="ui header">{this.state.city}</h2>
                </div>

                <div className="ui centered card">
                    <WeatherCard 
                        day={this.state.day1}
                        image={this.state.image1}
                        temp={this.state.temp1}
                        highTemp={this.state.highTemp1}
                        lowTemp={this.state.lowTemp1}
                    />
                </div>

                <div className="ui four cards">
                    <WeatherCard 
                        day={this.state.day2}
                        image={this.state.image2}
                        temp={this.state.temp2}
                        // highTemp={this.state.highTemp2}
                        // lowTemp={this.state.lowTemp2}
                    />
                    <WeatherCard 
                        day={this.state.day3}
                        image={this.state.image3}
                        temp={this.state.temp3}
                        // highTemp={this.state.highTemp3}
                        // lowTemp={this.state.lowTemp3}
                    />
                    <WeatherCard 
                        day={this.state.day4}
                        image={this.state.image4}
                        temp={this.state.temp4}
                        // highTemp={this.state.highTemp4}
                        // lowTemp={this.state.lowTemp4}
                    />
                    <WeatherCard 
                        day={this.state.day5}
                        image={this.state.image5}
                        temp={this.state.temp5}
                        // highTemp={this.state.highTemp5}
                        // lowTemp={this.state.lowTemp5}
                    />
                </div>
            </div>
        )
    }
}


export default App;