import React, { Component } from 'react';
import Logo from './header/Logo';
import NavBar from './header/NavBar';
import Accueil from './Accueil/Accueil';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <NavBar></NavBar>  
        <Accueil></Accueil>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
