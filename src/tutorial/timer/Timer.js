import React, {Component} from 'react';
class Timer extends Component {
  constructor() {
    super();
    console.log('constructor');
    this.state = {secondsElapsed: 0};
  }
  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}
export default Timer;
