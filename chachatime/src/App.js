import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
import Nav from "./Nav";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
