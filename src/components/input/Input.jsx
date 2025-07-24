import { useEffect } from 'react';
import './input.css';

export default function Input({ number, setNumber, setIsRandom, max, min,label }) { 
  const isFocused = number !== '' && number !== null && number !== undefined;

  useEffect(() => {
    setIsRandom(false);
  }, [number, setIsRandom]);

  const handleChange = (e) => {
    let value = e.target.value;

    const numValue = parseFloat(value);

    if (value !== '' && isNaN(numValue)) {
      return; 
    }

    if (min !== undefined && numValue < min) {
      setNumber(min.toString());
      return;
    }

    if (max !== undefined && numValue > max) {
      setNumber(max.toString());
      return;
    }
    setNumber(value);
  };

  return (
    <div className="input-container">
      <input
        id="input"
        type="number"
        value={number}
        onChange={handleChange} 
        className={isFocused ? 'filled' : ''}
        autoComplete="off"
        min={min} 
        max={max} 
      />
      <label htmlFor="input" className={isFocused ? 'filled' : ''}>
        {label}
      </label>
    </div>
  );
}