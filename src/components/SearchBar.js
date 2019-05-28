import React from 'react';

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
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Enter Your Zip Code</label>
                        <input 
                            type="text" 
                            value={this.state.location} 
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;