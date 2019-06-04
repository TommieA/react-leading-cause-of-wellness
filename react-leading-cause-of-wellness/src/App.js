import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import HomeContainer from './HomeContainer/HomeContainer';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <HomeContainer/>
        <Footer/>
    </div>
  );
}

export default App;
