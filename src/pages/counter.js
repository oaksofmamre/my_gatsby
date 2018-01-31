import React from "react";
import Link from "gatsby-link";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div style={{ color: `darkgrey` }}>
        <h1>Counter</h1>
        <p>current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          plus
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count - 1
            })
          }
        >
          minus
        </button>
        <br />
        <div>
          <Link to="/">Go back to the homepage</Link>
        </div>
      </div>
    );
  }
}

export default Counter;
