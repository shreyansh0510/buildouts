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
      return { count: prevState.count - 1 };
    });
  };

  handleIncrement = () => {
    // this.setState((prevState) => {
    //   return {
    //     count: Number(prevState.count + 1),
    //   };
    // });
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleIncrement}>Decrement</button>
        <button onClick={this.handleDecrement}>Increment</button>
      </div>
    );
  }
}
