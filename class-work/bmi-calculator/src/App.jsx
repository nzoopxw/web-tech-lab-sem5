import React, { useState } from 'react';
import './index.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === '' || height === '' || weight <= 0 || height <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }

    // Height in cm converted to meters
    const heightInMeters = height / 100;
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(1));

    if (calculatedBmi < 18.5) {
      setMessage('Underweight');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setMessage('Normal weight');
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setMessage('Overweight');
    } else {
      setMessage('Obesity');
    }
  };

  let reload = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-reload" onClick={reload} type="button">Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
