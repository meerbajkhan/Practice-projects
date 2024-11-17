// src/components/Quiz.js
import React, { useState } from 'react';

const Quiz = () => {
  const [score, setScore] = useState(0);

  const checkAnswer = (answer) => {
    if (answer === 'Yes') setScore(score + 1);
  };

  return (
    <div className="quiz">
      <h2>Health Quiz</h2>
      <p>Do you drink 8 glasses of water a day?</p>
      <button onClick={() => checkAnswer('Yes')}>Yes</button>
      <button onClick={() => checkAnswer('No')}>No</button>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;
