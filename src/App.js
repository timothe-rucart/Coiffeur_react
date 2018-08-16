import React, { Component } from 'react';
import Logo from './header/Logo';
import NavBar from './header/NavBar';
import Accueil from './Accueil/Accueil';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <NavBar></NavBar>  
        <Accueil></Accueil>
      </div>
    );
  }
}

export default App;
