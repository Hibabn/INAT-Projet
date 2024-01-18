// src/App.js
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Inscription from './components/Inscription';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Inscription/>
      <Footer/>
    </div>
  );
}

export default App;
