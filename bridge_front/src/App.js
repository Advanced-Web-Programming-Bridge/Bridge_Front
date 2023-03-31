import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import "./App.css"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
