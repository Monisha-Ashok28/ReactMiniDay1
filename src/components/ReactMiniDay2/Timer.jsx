import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="timer-box">
        <h2>Current Time</h2>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Timer;
