import React, { Component } from 'react';
import Logo from './header/Logo';
import NavBar from './header/NavBar';
import Presentation from './Accueil/Presentation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <NavBar></NavBar>  
        <Presentation></Presentation>

      </div>
    );
  }
}

export default App;
