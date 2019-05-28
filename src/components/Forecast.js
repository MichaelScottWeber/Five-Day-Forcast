import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';

class Forecast extends React.Component {
    state = {
        city: '',
        day: '',
        weather:'',
        highTemp: '',
        lowTemp: ''
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
            highTemp: response.data.list[0].main.temp_max
        })
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />

                <div className="ui segment">
                    <h2 className="ui header">{this.state.city}</h2>
                </div>

                <div className="ui five cards">
                    <WeatherCard 
                        day="Monday"
                        weather="sun"
                        highTemp="82"
                        lowTemp="55"
                    />
                    <WeatherCard 
                        day="Tuesday"
                        weather="cloud-sun"
                        highTemp="70"
                        lowTemp="51"
                    />
                    <WeatherCard 
                        day="Wednesday"
                        weather="cloud"
                        highTemp="69"
                        lowTemp="58"
                    />
                    <WeatherCard 
                        day="Thursday"
                        weather="sun"
                        highTemp="78"
                        lowTemp="52"
                    />
                    <WeatherCard 
                        day="Friday"
                        weather="cloud-rain"
                        highTemp="63"
                        lowTemp="48"
                    />
                </div>
            </div>
        )
    }
}

export default Forecast;