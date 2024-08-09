// src/components/CodingExercise.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CodingExercise = () => {
  const { topicId, questionId } = useParams();
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '50%' }}>
        <h1>Question {questionId}</h1>
        <p>{`This is a ${topicId} question.`}</p>
        <h2>Timer: {seconds}s</h2>
      </div>
      <div style={{ width: '50%' }}>
        <textarea
          rows="20"
          cols="50"
          placeholder="Write your code here..."
          style={{ width: '100%',marginTop: '30px' }}
        />
      </div>
    </div>
  );
};

export default CodingExercise;
