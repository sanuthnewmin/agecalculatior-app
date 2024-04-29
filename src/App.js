import React, { useState } from 'react';
import './components/styles/styles.css'; // Import CSS file for styling

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(`${birthYear}-${birthMonth}-${birthDate}`);
    const diff = today - birthDateObj;
    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator-container">
      <h2>Age Calculator</h2>
      <div className="input-container">
        <label>Date of Birth: </label>
        <input type="number" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Month of Birth: </label>
        <input type="number" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Year of Birth: </label>
        <input type="number" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p className="age-result">Your age is {age} years old</p>}
    </div>
  );
}

export default AgeCalculator;
