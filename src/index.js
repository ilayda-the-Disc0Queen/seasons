import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null }; // needs to be initialised. null is the standard default value

    window.navigator.geolocation.getCurrentPosition(
    position => {
      // to update the state and make it refresh itself
      // you HAVE to use the setState() function!!!!!
      this.setState({ lat: position.coords.latitude });
    },
    err => console.log(err)
    );
  }
  render() {
    // render gets called A LOT so we took the geolocation stuff
    // out so it doesn't slow down the page
    return <div>Lattitude = {this.state.lat}</div>;
  };
};

ReactDOM.render(
  <App />, document.querySelector('#root')
  );


