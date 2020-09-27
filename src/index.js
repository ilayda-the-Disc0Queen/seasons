import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' }; // needs to be initialised. null is the standard default value

    window.navigator.geolocation.getCurrentPosition(
    position => {
      // to update the state and make it refresh itself
      // you HAVE to use the setState() function!!!!!
      this.setState({ lat: position.coords.latitude });
    },
    err => {
      this.setState({ errorMessage: err.message }) // you can see what's in err by console logging it first
    }
    );
  }
  render() {
    // render gets called A LOT so we took the geolocation stuff
    // out so it doesn't slow down the page
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat}</div>;
    }

    return <div>Loading! Please wait...</div>;

  };
};

ReactDOM.render(
  <App />, document.querySelector('#root')
  );


