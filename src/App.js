
import React from 'react';
import './App.css';
import Router from './route/Router';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AuthProvider } from './Context/Context';

Amplify.configure(awsconfig);

function App() {
  return (
    <AuthProvider>
      <React.StrictMode>
        <Router/>
      </React.StrictMode>
    </AuthProvider>
  );
  
  
}

export default App;
