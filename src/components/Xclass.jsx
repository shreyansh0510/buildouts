import React from "react";

export default class XClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState - 1,
      };
    });
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        count: prevState + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
