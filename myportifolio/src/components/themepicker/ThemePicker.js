import React, { useState } from 'react';
import './themepicker.css'

const ThemePicker = () => {
  const [themeColors, setThemeColors] = useState([
    { name: 'Blue', color: '#007bff' },
    { name: 'Green', color: '#28a745' },
    { name: 'Yellow', color: '#ffc107' },
    { name: 'Red', color: '#dc3545' },
    { name: 'Purple', color: '#6f42c1' },
  ]);

  const [backgroundOptions, setBackgroundOptions] = useState([
    { name: 'Black', color: '#000000' },
    { name: 'White', color: '#ffffff' },
  ]);

  const applyColor = (color) => {
    document.documentElement.style.setProperty('--primary-color', color);
  };

  const applyBackground = (color) => {
    document.documentElement.style.setProperty('--background-color', color);
    document.body.style.backgroundColor = color; // Apply background color to the body
  };
  
  return (
    <div className="theme-picker">
      <h3>Choose Theme Color</h3>
      <div className="color-options">
        {themeColors.map((theme) => (
          <button
            key={theme.name}
            style={{ backgroundColor: theme.color }}
            onClick={() => applyColor(theme.color)}
          >
            {theme.name}
          </button>
        ))}
      </div>
      <h3>Choose Background Color</h3>
      <div className="background-options">
        {backgroundOptions.map((background) => (
          <button
            key={background.name}
            style={{ backgroundColor: background.color }}
            onClick={() => applyBackground(background.color)}
          >
            {background.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemePicker;
