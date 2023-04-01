import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import "./App.css"
import Exercise from './exercise/Exercise';

function App() {
  return (
    <div className="App">
      <Exercise />
    </div>
  );
}

export default App;
