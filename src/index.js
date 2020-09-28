import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  // babel changes the line below into the component method we had before
  state = { lat: null, errorMessage: '' };

componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    position => this.setState({ lat: position.coords.latitude }),
    err => this.setState({ errorMessage: err.message })
    );
}

componentDidUpdate() {
  console.log('My component was just updated - it rerendered!')
}

  render() {
    // render gets called A LOT so we took the geolocation stuff
    // out so it doesn't slow down the page
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading! Please wait...</div>;

  };
};

ReactDOM.render(
  <App />, document.querySelector('#root')
  );


