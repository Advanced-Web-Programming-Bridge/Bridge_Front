import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import Footer from './components/footer';
import Exercise from './exercise/Exercise';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
