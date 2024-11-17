// src/components/HealthTips.js
import React, { useState, useEffect } from 'react';

const HealthTips = () => {
  const [tip, setTip] = useState('');

  useEffect(() => {
    fetch("https://api.quotable.io/random?tags=health")
      .then(response => response.json())
      .then(data => setTip(data.content));
  }, []);

  return (
    <div className="health-tips">
      <h2>Daily Health Tip</h2>
      <p>{tip}</p>
    </div>
  );
};

export default HealthTips;
