import logo from './logo.svg';
import './App.css';
import OffcanvasExample from './components/navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home';
import Footer from './components/footer';
import Meal from './components/meal';
import Exercise from './components/exercise';

function App() {
  return (
    <div className="App">
      {/* <OffcanvasExample/>
      <Home/>
      <Footer/> */}
      {/* <Exercise /> */}
      <Meal />
    </div>
  );
}

export default App;
