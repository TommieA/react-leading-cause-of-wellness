import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import HomeContainer from './HomeContainer/HomeContainer';
import AboutMe from './AboutMe/AboutMe';
import Resources from './Resources/Resources';
import AuthContainer from './AuthContainer/AuthContainer';
import Register from './AuthContainer/Register/Register';
import LogIn from './AuthContainer/LogIn/LogIn';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <HomeContainer/>
        <AboutMe/>
        <Resources/>
        <AuthContainer/>
        <Register/>
        <LogIn/>
        <Footer/>
    </div>
  );
}

export default App;
