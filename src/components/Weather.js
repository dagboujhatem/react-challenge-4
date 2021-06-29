import React, { Component } from "react";
import axios from 'axios';

export class Weather extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "http://api.weatherstack.com/current?access_key=3ad490972ca62027b8d67ce49fdb9370&query=tunisia",
    }).then((response) => {
    //   this.setState({
    //     data: response.data[data],
    //   });
    console.log(response.request.type);
    }).catch(error => console.log(error));
  }

  render() {
    return <div></div>;
  }
}

export default Weather;
