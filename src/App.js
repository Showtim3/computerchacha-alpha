import React from 'react';
import './App.css';
import logo from './assets/logo.svg'
class App extends React.Component {
  render() {
    return (
        <div className="parent">
            <div className="intro-container">
                <img src={logo} alt="logo img"/>
            </div>
        </div>
    );
  }
}

export default App;
