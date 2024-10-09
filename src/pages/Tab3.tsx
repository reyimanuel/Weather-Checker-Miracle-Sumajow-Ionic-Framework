import React, { useState } from "react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  const [defaultCity, setDefaultCity] = useState<string>("Manado");
  const [unit, setUnit] = useState<string>("metric");

  const handleSave = () => {
    localStorage.setItem("defaultCity", defaultCity);
    localStorage.setItem("unit", unit);
    alert("Settings saved!");
  };

  return (
    <div className="tab3-container">
      <h1>Settings</h1>

      <div className="tab3-input-group">
        <label htmlFor="defaultCity">Default City:</label>
        <input
          type="text"
          id="defaultCity"
          value={defaultCity}
          onChange={(e) => setDefaultCity(e.target.value)}
        />
      </div>

      <div className="tab3-input-group">
        <label htmlFor="unit">Unit:</label>
        <select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
      </div>

      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Tab3;
