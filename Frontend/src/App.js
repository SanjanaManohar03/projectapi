// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopicList from './components/TopicList';
import QuestionList from './components/QuestionList';
import CodingExercise from './components/CodingExercise';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TopicList} />
        <Route path="/questions/:topicId" component={QuestionList} />
        <Route path="/coding/:topicId/:questionId" component={CodingExercise} />
      </Switch>
    </Router>
  );
};

export default App;
