import logo from './logo.svg';
import './App.css';
import OffcanvasExample from './components/navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import Footer from './components/footer';
import Meal from './components/meal';
import Exercise from './components/exercise';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/meal" element={<Meal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
