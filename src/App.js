import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (display === '0' || display === 'Error') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleShowName = () => {
    setDisplay('John Arnie V. Mallari');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };
  return (
    <div className="calculator">
      <h1 className='head' >Calculator of John Arnie V. Mallari - IT3A</h1>
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={handleClear}>C</button>
        
      </div>
      <button className="name-button" onClick={handleShowName}>Mallari</button>
    </div>
    
  );
}

export default App;
