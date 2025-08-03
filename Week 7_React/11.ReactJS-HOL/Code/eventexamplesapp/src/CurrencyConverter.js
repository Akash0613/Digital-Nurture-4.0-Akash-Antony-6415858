import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  // Conversion rate (example: 1 Euro = 90 Rupees)
  const conversionRate = 90;

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (rupees) {
      const convertedValue = rupees / conversionRate;
      setEuros(convertedValue.toFixed(2));
    }
  };

  const handleChange = (e) => {
    setRupees(e.target.value);
  };

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Indian Rupees:
            <input 
              type="number" 
              value={rupees} 
              onChange={handleChange} 
              placeholder="Enter amount in Rupees"
            />
          </label>
        </div>
        <button type="submit">Convert to Euro</button>
      </form>
      {euros && (
        <p>{rupees} Rupees = {euros} Euros</p>
      )}
    </div>
  );
}

export default CurrencyConverter;