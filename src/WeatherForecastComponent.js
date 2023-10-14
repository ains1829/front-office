import React, { Component } from 'react';
import axios from 'axios';

class WeatherForecastComponent extends Component {
  constructor() {
    super();
    this.state = {
      mapData: [],
    };
  }

  componentDidMount() {
    this.fetchMapData();
  }

  fetchMapData() {
    axios.get('http://localhost:5045/weatherForecast/testMap?map=2')
      .then((response) => {
        this.setState({ mapData: response.data });
      })
      .catch((error) => {
        console.error('Error fetching map data:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Map Data</h1>
        <ul>
          {this.state.mapData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WeatherForecastComponent;
