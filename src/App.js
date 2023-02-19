
import React from 'react';
import './App.css';
import Router from './route/Router';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <React.StrictMode>
      <Router/>
    </React.StrictMode>
  );
}

export default App;
