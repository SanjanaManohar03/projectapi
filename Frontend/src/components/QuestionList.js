// src/components/QuestionList.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const questions = {
  javabasics: Array.from({ length: 50 }, (_, i) => `Java Basic Question ${i + 1}`),
  operators: Array.from({ length: 50 }, (_, i) => `Operator Question ${i + 1}`),
  loops: Array.from({ length: 50 }, (_, i) => `Looping Question ${i + 1}`),
  arrays: Array.from({ length: 50 }, (_, i) => `Array Question ${i + 1}`),
  strings: Array.from({ length: 50 }, (_, i) => `String Question ${i + 1}`),
  class: Array.from({ length: 50 }, (_, i) => `Classes and Objects Question ${i + 1}`),
  abstract: Array.from({ length: 50 }, (_, i) => `Abstract and Interface Question ${i + 1}`),
  polymorphism: Array.from({ length: 50 }, (_, i) => `Polymorphism Question ${i + 1}`),
  collection: Array.from({ length: 50 }, (_, i) => `Collections Question ${i + 1}`),
  linkedlist: Array.from({ length: 50 }, (_, i) => `Linked List Question ${i + 1}`),
  stack: Array.from({ length: 50 }, (_, i) => `Stack Question ${i + 1}`),
  queue: Array.from({ length: 50 }, (_, i) => `Queue Question ${i + 1}`),
  tree: Array.from({ length: 50 }, (_, i) => `Tree Question ${i + 1}`),
};

const QuestionList = () => {
  const { topicId } = useParams();
  const topicQuestions = questions[topicId] || [];

  return (
    <div>
      <h1>{topicId.charAt(0).toUpperCase() + topicId.slice(1)} Questions</h1>
      <ul>
        {topicQuestions.map((question, index) => (
          <li key={index}>
            <Link to={`/coding/${topicId}/${index}`}>{question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
