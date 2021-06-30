import React, { Component } from "react";
import axios from 'axios';

export class Weather extends Component {
  state = {
    data: {},
    isFetching: true,
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://api.weatherstack.com/current?access_key=3ad490972ca62027b8d67ce49fdb9370&query=tunisia",
    }).then((response) => {
      this.setState({
        data: response.data,
        isFetching: false,
      }); 
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
    <div>
        <h1 className="text-center text-primary my-3">{!this.state.isFetching ? 
        `Country : ${this.state.data.location.country}` : ''}
        </h1>
        <h1 className="text-center text-primary my-3">{!this.state.isFetching ? 
        `Temperature : ${this.state.data.current.temperature}` : ''}
        </h1>
        <p className="text-center text-primary my-3 h4">{this.state.isFetching ? 'Fetching weather data ...' : ''}</p>
    </div>);
  }
}

export default Weather;
