import React, { Component } from 'react';

import logo from './logo.svg';
import car from './Aventador-Transparent-Background.png';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3> Team </h3>
        <div id = "div1" class="container" styles="list-style-type: none;">
            <ul>
              <li>Danny Batarseh</li>
              <li>Zayaan Ali</li>
              <li>David Batarseh</li>
              <li>Tommy Lu</li>
            </ul>
        </div>
        <div id = "div2" class="container" styles="list-style-type: none;">
            <ul>
            <li>Eric Yoon</li>
            <li>Weifeng Li</li>
            <li>Sunny Lee</li>
            <li>.</li>
          </ul>
        </div>
        </header>
        <div>
          <img src={car} class="container"  className="App-logo-custom" alt="logo" />
        </div>
        <div>
          <h1 className="App-title" class="container" >Find your ride!</h1>
        </div>
        <div>
          <p className="App-intro">{this.state.response}</p>
        </div>
      </div>
    );
  }
}

export default App;