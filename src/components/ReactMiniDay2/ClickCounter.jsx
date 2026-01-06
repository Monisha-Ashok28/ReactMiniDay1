import React, { Component } from "react";
import "./ClickCounter.css";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="counter-box">
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Click Me</button>
      </div>
    );
  }
}

export default ClickCounter;
