import React, { useState } from 'react';

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleName1Change = (event) => {
    setName1(event.target.value);
  }

  const handleName2Change = (event) => {
    setName2(event.target.value);
  }

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

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
    setResult(flamesResults[index]);
  }

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  }

  return (
    <div id="main">
      <input
        data-testid="input1"
        placeholder="Enter first name"
        value={name1}
        onChange={handleName1Change}
      />
      <input
        data-testid="input2"
        placeholder="Enter second name"
        value={name2}
        onChange={handleName2Change}
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship Future
      </button>
      <button
        data-testid="clear"
        onClick={clearFields}
      >
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;

