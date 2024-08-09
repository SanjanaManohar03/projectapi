// src/components/TopicList.js
import React from 'react';
import { Link } from 'react-router-dom';

const topics = [
  { id: 'javabasics', name: 'Java Bssics' },
  { id: 'operators', name: 'Operators' },
  { id: 'loops', name: 'Looping Statements' },
  { id: 'arrays', name: 'Arrays' },
  { id: 'strings', name: 'Strings' },
  { id: 'class', name: 'Classes and Objects' },
  { id: 'abstract', name: 'Abstract and Interface' },
  { id: 'polymorphism', name: 'Polymorphism' },
  //{ id: 'exception', name: 'Exception Handling' },
  { id: 'collection', name: 'Collections' },
  { id: 'linkedlist', name: 'Linked List' },
  { id: 'stack', name: 'Stack' },
  { id: 'queue', name: 'Queue' },
  { id: 'tree', name: 'Tree' },
  // Add more topics here
];

const TopicList = () => {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            <Link to={`/questions/${topic.id}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
