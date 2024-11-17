// src/components/Dashboard.js
import React from 'react';
import Clock from './Clock';
import HealthLog from './HealthLog';
import HealthTips from './HealthTips';
import Quiz from './Quiz';

const Dashboard = () => (
  <div className="dashboard">
    <h1>Health & Wellness Tracker</h1>
    <Clock />
    <HealthTips />
    <HealthLog />
    <Quiz />
  </div>
);

export default Dashboard;
