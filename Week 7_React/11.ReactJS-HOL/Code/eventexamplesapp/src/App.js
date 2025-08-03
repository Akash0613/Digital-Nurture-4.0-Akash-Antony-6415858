import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      rupees: '',
      euro: ''
    };
  }

  // Counter methods
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  sayHello = () => {
    alert("Hello! Welcome to React Events");
  };

  handleIncrement = () => {
    this.incrementCounter();
    this.sayHello();
  };

  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Welcome message method
  greet = (message) => {
    alert(message);
  };

  // Synthetic event method
  handleClick = (e) => {
    alert("I was clicked");
    console.log(e); // Synthetic event
  };

  // Currency converter methods
  handleRupeesChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const conversionRate = 90; // 1 Euro = 90 Rupees
    const euroValue = (this.state.rupees / conversionRate).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Examples</h1>
        
        {/* Counter Section */}
        <div className="example-section">
          <h2>Counter: {this.state.count}</h2>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
        </div>
        
        {/* Welcome Message Section */}
        <div className="example-section">
          <button onClick={() => this.greet("Welcome")}>Say Welcome</button>
        </div>
        
        {/* Synthetic Event Section */}
        <div className="example-section">
          <button onClick={this.handleClick}>Click Me</button>
        </div>
        
        {/* Currency Converter Section */}
        <div className="example-section">
          <h2>Currency Convertor</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Indian Rupees:
              <input
                type="number"
                value={this.state.rupees}
                onChange={this.handleRupeesChange}
              />
            </label>
            <button type="submit">Convert</button>
          </form>
          {this.state.euro && (
            <p>Converted Value: {this.state.euro} Euro</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;