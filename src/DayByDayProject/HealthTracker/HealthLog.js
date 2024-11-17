// src/components/HealthLog.js
import React, { useState } from 'react';

const HealthLog = () => {
  const [logs, setLogs] = useState([]);
  const [note, setNote] = useState('');

  const addLog = () => {
    setLogs([...logs, { id: logs.length, content: note }]);
    setNote('');
  };

  return (
    <div className="health-log">
      <h2>Health Journal</h2>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter health note..."
      />
      <button onClick={addLog}>Add Log</button>
      <div className="logs">
        {logs.map((log) => (
          <div key={log.id} className="log-card">{log.content}</div>
        ))}
      </div>
    </div>
  );
};

export default HealthLog;
