import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      result: ""
    };
    this.handleName1Change = this.handleName1Change.bind(this);
    this.handleName2Change = this.handleName2Change.bind(this);
    this.calculateRelationship = this.calculateRelationship.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  handleName1Change(event) {
    this.setState({ name1: event.target.value });
  }

  handleName2Change(event) {
    this.setState({ name2: event.target.value });
  }

  calculateRelationship() {
    const { name1, name2 } = this.state;
    if (!name1 || !name2) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }
    // the rest of the code remains the same
    const getCharCount = (str) => {
        return str.split('').reduce((count, char) => {
          count[char] = (count[char] || 0) + 1;
          return count;
        }, {});
      };
  
      const count1 = getCharCount(name1);
      const count2 = getCharCount(name2);
  
      let commonCount = 0;
  
      Object.keys(count1).forEach(char => {
        if (count2[char]) {
          commonCount += Math.min(count1[char], count2[char]);
        }
      });
  
      const remainingLength = (name1.length - commonCount) + (name2.length - commonCount);
      const index = remainingLength % 6;
  
      const flamesResults = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
      this.setState({ result: flamesResults[index] });
  }

  clearFields() {
    this.setState({ name1: "", name2: "", result: "" });
  }

  render() {
    return (
      <div id="main">
        <input
          data-testid="input1"
          placeholder="Enter first name"
          value={this.state.name1}
          onChange={this.handleName1Change}
        />
        <input
          data-testid="input2"
          placeholder="Enter second name"
          value={this.state.name2}
          onChange={this.handleName2Change}
        />
        <button
          data-testid="calculate_relationship"
          onClick={this.calculateRelationship}
        >
          Calculate Relationship Future
        </button>
        <button
          data-testid="clear"
          onClick={this.clearFields}
        >
          Clear
        </button>
        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App