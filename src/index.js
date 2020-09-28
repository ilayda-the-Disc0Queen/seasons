import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader loadingMessage="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}


ReactDOM.render(
  <App />, document.querySelector('#root')
  );


