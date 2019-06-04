import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {location: ''}

    onInputChange = (event) => {
        this.setState({ location: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.location);
    }

    render() {
        return (
            <div className="search-bar">
                <form 
                    className="form"
                    onSubmit={this.onFormSubmit} 
                >
                    <div className="input-group">
                        <input 
                            className="text-input"
                            type="text" 
                            value={this.state.location} 
                            onChange={this.onInputChange}
                        />
                        <input 
                            className="submit"
                            type="submit" 
                            value="Go" 
                        />
                    </div>
                    <label>Enter Your Zip Code - location will be approximate</label>
                </form>
            </div>
        );
    };
}

export default SearchBar;